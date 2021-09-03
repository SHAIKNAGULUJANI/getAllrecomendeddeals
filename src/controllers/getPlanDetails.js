const config = require('config');
const { Sentry } = require('vod-npm-sentry');
const sentryCategory = config.get('sentry.categories.getPlanDetails');
const contractService = require('vod-npm-services/vod-ms-account-summary');
const prometheusClient = require('restify-prom-bundle').client;
const getPlanDetailError = new prometheusClient.Counter({
  name: 'journey_upgrade_get_plan_detail_error_count',
  help: 'vod-ms-journey-upgrade get_plan_details error'
});

exports.handler = async function getPlanDetails(req, res, next) {
  Sentry.info('Beginning getPlanDetails...', {}, sentryCategory);
  const params = {
    headers: req.headers,
    msisdn: req.params.msisdn
  };
  const response = await contractService.getPlanDetails(req, params);

  if (!response.ok) {
    getPlanDetailError.inc();
    return next(response.error);
  }

  res.status(response.status);
  res.json({
    agreementItem: [
      {
        product: [
          {
            id: response.data.result.planCode,
            name: response.data.result.plan
          }
        ],
        termOrCondition: [
          {
            id: response.data.result.planCode,
            validFor: {
              endDateTime: response.data.result.endDate,
              startDateTime: response.data.result.startDate
            }
          }
        ]
      }
    ],
    characteristic: [
      {
        name: 'upgradeDue',
        value: response.data.result.upgradeDue
      },
      {
        name: 'redirectLink',
        value: response.data.result.banner.redirectLink
      },
      {
        name: 'imageLink',
        value: response.data.result.banner.imageLink
      },
      {
        name: 'processing',
        value: response.data.result.processing
      },
      {
        name: 'successful',
        value: response.data.successful
      },
      {
        name: 'code',
        value: response.data.code
      }
    ]
  });
  return next();
};
