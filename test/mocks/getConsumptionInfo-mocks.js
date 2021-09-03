import httpStatus from 'http-status-codes';
import { CustomError } from 'vod-npm-utils';

module.exports.pastUsageMock = {
  ok: true,
  data: {
      billing: {
        averageSpend: 274.59000000000003
      },
      usageCharacteristic: {
        data: 0,
        sms: 0,
        voice: 0
      },
    successful: false,
    code: 0
  },
  status: 200
};

module.exports.pastUsageMockFail = {
  ok: false,
  error: new CustomError('BadRequest', httpStatus.BAD_REQUEST)
};

module.exports.finalResult = {
  ok: true,
  data: {
         usageCharacteristic: [
             {
                 "name": "data",
                 "value": 6702
             },
             {
                 "name": "sms",
                 "value": 47
             },
             {
                 "name": "voice",
                 "value": 1439
             },
             {
                 "name": "averageSpend",
                 "value": 1780.05
             }
         ]
     }
};

module.exports.pastUsageMock = {
  ok: false,
  error: new CustomError('BadRequest', httpStatus.BAD_REQUEST)
};
