const config = require('config');
const { Sentry } = require('vod-npm-sentry');
const sentryCategory = config.get('sentry.categories.getAllRecommendedDeals');
const { dealsService } = require('vod-npm-services');

const client = require('restify-prom-bundle').client;

const getAllRecommendedDealsError = new client.Counter({
  name: 'counter_get_all_recommended_deals_error',
  help: 'Error count for get all recommended deals client call'
});

exports.handler = async function getAllRecommendedDeals(req, res, next) {

  Sentry.info('Beginning getAllRecommendedDeals...', {}, sentryCategory);

  const params = {
    headers: req.headers,
    accessory: req.query.accessory,
    accountDealFlag: req.query.accountDealFlag,
    channel: 'ONLINE',
    dealValueLowerLimit: req.query.dealValueLowerLimit,
    dealerGroup: req.query.dealerGroup,
    dealerId: req.query.dealerId,
    dealsheetNumber: req.query.dealsheetNumber,
    device: req.query.device,
    deviceManufacturer: req.query.deviceManufacturer,
    deviceType: req.query.deviceType,
    duration: req.query.duration,
    financedThresholdAmount: req.query.financedThresholdAmount,
    interactSessionId: req.query.interactSessionId,
    msisdn: req.query.msisdn,
    pricePlan: req.query.pricePlan,
    rowStart: req.query.rowStart,
    rowEnd: req.query.rowEnd,
    simOnly: req.query.simOnly,
    sortBy: req.query.sortBy,
    stockCode: req.query.stockCode,
    subChannel: req.query.subChannel,
    tariffLimit: req.query.tariffLimit,
    tariffLowerLimit: req.query.tariffLowerLimit,
    thirdParty: req.query.thirdParty,
    originID: req.headers.originID

  };

  const response = await dealsService.getAllRecommendedDeals(req, params);

  if (!response.ok) {
    getAllRecommendedDealsError.inc();
    return next(response.error);
  }

  res.status(response.status);
  res.json(response.data);

  return next();
};
