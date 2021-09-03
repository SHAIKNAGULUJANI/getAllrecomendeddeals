const config = require('config');
const { Sentry } = require('vod-npm-sentry');
const sentryCategory = config.get('sentry.categories.getDealersProductOffering');
const { dealsService } = require('vod-npm-services');
const prometheusClient = require('restify-prom-bundle').client;

const getDealersProductOfferingErr = new prometheusClient.Counter({
  name: 'journey_upgrade_product_offering_error_count',
  help: 'vod-ms-journey-upgrade productOffering error'
});

exports.handler = async function getDealersProductOffering(req, res, next) {
  Sentry.info('Beginning productOffering...', {}, sentryCategory);

  const params = {
    headers: req.headers,
    dealerId: req.query.dealerId,
    accessory: req.query.accessory,
    accountDealFlag: req.query.accountDealFlag,
    dealType: req.query.dealType,
    dealValueUpperLimit: req.query.dealValueUpperLimit,
    dealsheetNumber: req.query.dealsheetNumber,
    device: req.query.device,
    deviceManufacturer: req.query.deviceManufacturer,
    financedThresholdAmount: req.query.financedThresholdAmount,
    packageCodes: req.query.packageCodes,
    pricePlan: req.query.pricePlan,
    simOnly: req.query.simOnly,
    stockCode: req.query.stockCode
  };

  const response = await dealsService.getDealersProductOffering(req, params);

  if (!response.ok) {
    getDealersProductOfferingErr.inc();
    return next(response.error);
  }

  res.status(response.status);
  res.json(response.data);
  return next();
};
