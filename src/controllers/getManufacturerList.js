const config = require('config');
const { Sentry } = require('vod-npm-sentry');
const sentryCategory = config.get('sentry.categories.getManufacturerList');
const { upgradesService } = require('vod-npm-services');
const getManufacturersHelper = require('../helpers/getManufacturersHelper');
const prometheusClient = require('restify-prom-bundle').client;
const getManufacturerListError = new prometheusClient.Counter({
  name: 'journey_upgrade_get_manufacturer_list_error_count',
  help: 'vod-ms-journey-upgrade get_manufacturer_list error'
});

exports.handler = async function getManufacturerList(req, res, next) {
  Sentry.info('Beginning getManufacturerList...', {}, sentryCategory);

  const params = {
    headers: req.headers
  };

  const response = await upgradesService.getConfig(req, params);

  if (!response.ok) {
    getManufacturerListError.inc();
    return next(response.error);
  }

  const jsonData = response.data.result.properties.brandName;
  const manufacturersArr = jsonData.map(getManufacturersHelper);

  res.status(response.status);
  res.json({
    description: 'brandName of devices',
    name: 'devicebrandName',
    subCategory: manufacturersArr
  });
  return next();
};
