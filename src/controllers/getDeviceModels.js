const config = require('config');
const { Sentry } = require('vod-npm-sentry');
const sentryCategory = config.get('sentry.categories.getDeviceModels');
const { devicesService } = require('vod-npm-services');
const getModelsDetailsHelper = require('../helpers/getDeviceModelsHelper.js');
const prometheusClient = require('restify-prom-bundle').client;
const getDeviceModelsError = new prometheusClient.Counter({
  name: 'journey_upgrade_get_device_models_error_count',
  help: 'vod-ms-journey-upgrade get_device_models error'
});

exports.handler = async function getDeviceModels(req, res, next) {
  Sentry.info('Beginning getDeviceModels...', {}, sentryCategory);
  const params = {
    headers: req.headers,
    manufacturer: req.query.brandName
  };

  const response = await devicesService.getDeviceModels(req, params);

  if (!response.ok) {
    getDeviceModelsError.inc();
    return next(response.error);
  }

  const jsonData = response.data.result;
  const brand = response.data.result[0].manufacturer;
  const modelsArr = jsonData.map(getModelsDetailsHelper);

  res.status(response.status);
  res.json({
    brand: brand,
    description: 'model name of devices',
    productSpecCharacteristic: modelsArr
  });
  return next();
};
