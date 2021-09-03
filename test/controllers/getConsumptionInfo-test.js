import 'chai/register-should';
import chai from 'chai';
import config from 'config';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
const assert = sinon.assert;

// Controllers
import { handler as controller } from '../../src/controllers/getConsumptionInfo';
import * as customerService from 'vod-npm-services/vod-ms-customer/service';

import * as consumptionMock from '../mocks/getConsumptionInfo-mocks';
import httpMocks from 'node-mocks-http';

describe('Given getConsumptionInfo controller', function () {
  let req, res, custStub, logger, next;

  before(() => {
    logger = require('vod-npm-console-logger').createLogger({
      name: 'vod-ms-upgrade-journey-usage',
      level: config.get('log.level')
    });
  });
  beforeEach(function () {

    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    req.log = logger;
    next = sinon.spy();
    custStub = sinon.stub(customerService, 'getPastUsage');

  });
  afterEach(function () {
    custStub.restore();

  });

  describe('When Consumption returned successful response', function () {
      beforeEach(function () {
        custStub.resolves(consumptionMock.pastUsageMock);
      });
      it('Should then return success response', async function () {

      req.query.msisdn = '0630006826';
      await controller(req, res, next);

      assert.calledOnce(next);
      assert.calledWith(next, consumptionMock.pastUsageMock.error);
    });
  });

  describe('When Consumption returned failed response', function () {
        beforeEach(function () {
           custStub.resolves(consumptionMock.pastUsageMockFail);
        });
        it('Should then return failed response', async function () {

          req.query.msisdn = 'MY NAME IS MR POLO MAN';
          await controller(req, res, next);

          assert.calledOnce(next);
          assert.calledWith(next, consumptionMock.pastUsageMockFail.error);
        });
      });

});
