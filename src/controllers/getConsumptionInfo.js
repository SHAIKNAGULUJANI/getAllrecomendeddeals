const httpStatus = require('http-status-codes');

const { customerService } = require('vod-npm-services');
const { consumptionDetailsSanitizer } = require('../helpers/sanitizers');
const client = require('restify-prom-bundle').client;

const getpastUsageError = new client.Counter({
  name: 'counter_get_consumption_past_usage_error',
  help: 'Error count for consumption service past usage client call'
});

exports.handler = async function getConsumptionInfo(req, res, next) {

  const params = {
    headers: req.headers,
    msisdn: req.query.msisdn
  };

  const pastUsageResult = await customerService.getPastUsage(req, params);

  if (!pastUsageResult.ok) {
    getpastUsageError.inc();
    return next(pastUsageResult.error);
  }

  const pastUseDet = pastUsageResult.data.result;

  const finalResult = consumptionDetailsSanitizer(pastUseDet);

  res.status(httpStatus.OK);
  res.json({
    result: finalResult
  });

};



