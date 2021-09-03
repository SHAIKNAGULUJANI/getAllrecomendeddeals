import chai from 'chai';
import config from 'config';
import httpMocks from 'node-mocks-http';
import httpStatus from 'http-status-codes';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { handler as getAllRecommendedDeals } from '../../src/controllers/getAllRecommendedDeals';

const serviceStub = require('vod-npm-services/vod-ms-deals/service');


import {
  success,
  failure,
  mockParams
} from '../mocks/getAllRecommendedDeals-mock';


chai.use(sinonChai);

const expect = chai.expect;

let req, res, next, logger, getAllRecommendedDealsStub;

describe('Given getAllRecommendedDeals controller', function () {
  before(() => {
    getAllRecommendedDealsStub = sinon.stub(serviceStub, 'getAllRecommendedDeals');

    logger = require('vod-npm-console-logger').createLogger({
      name: 'vod-ms-app-deals',
      level: config.get('log.level')
    });
  });

  beforeEach(() => {
    getAllRecommendedDealsStub.reset();
    getAllRecommendedDealsStub.throws(new Error('Get all recommended deals stub called with invalid params'));

    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = sinon.spy();

    req.headers = {
      authorization: 'token'
    };
    req.log = logger;
    req.query = mockParams.query;
  });

  afterEach(() => {
    req = null;
    res = null;
    next = null;
  });

  after(() => {
    getAllRecommendedDealsStub.restore();
  });

  it('returns 200 when given a valid request', async () => {

    getAllRecommendedDealsStub
      .withArgs(req, {
        headers: req.headers,
        ...mockParams.query
      })
      .resolves(success.mock);

    await getAllRecommendedDeals(req, res, next);

    const response = JSON.parse(res._getData());

    expect(res._getStatusCode()).to.equal(httpStatus.OK);
    expect(response).to.deep.equal(success.expected.result);
  });

  it('invokes error middleware correctly when vod-ms-deals fails', async () => {
    getAllRecommendedDealsStub
      .withArgs(req, {
        headers: req.headers,
        ...mockParams.query
      })
      .resolves(failure.mock);

    await getAllRecommendedDeals(req, res, next);

    sinon.assert.calledOnce(next);
    sinon.assert.calledWith(next, failure.mock.error);
  });
});
