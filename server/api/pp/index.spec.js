'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var ppCtrlStub = {
  index: 'ppCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var ppIndex = proxyquire('./index.js', {
  'express': {
    Router: function () {
      return routerStub;
    }
  },
  './pp.controller': ppCtrlStub
});

describe('PP API Router:', function () {

  it('should return an express router instance', function () {
    ppIndex.should.equal(routerStub);
  });

  describe('GET /api/pps', function () {

    it('should route to pp.controller.index', function () {
      routerStub.get
        .withArgs('/', 'ppCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
