'use strict';

var app = require('../..');
var request = require('supertest');

describe('pp API:', function () {

  describe('GET /api/pps', function () {
    var pps;

    beforeEach(function (done) {
      request(app)
        .get('/api/pps')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, res) {
          if (err) {
            return done(err);
          }
          pps = res.body;
          done();
        });
    });

    it('should respond with JSON array', function () {
      pps.should.be.instanceOf(Array);
    });

  });

});
