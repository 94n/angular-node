/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 */

'use strict';

// Gets a list of Things
var request = require('request');
exports.index = function (req, res) {
  var options = {
    method: 'GET',
    url: 'https://smida-dev.test.idoc.com.ua/api/registry/okpoCard',
    qs: {code: '01130549'}
  };
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
  request(options, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.json(body);
    } else {
      console.log(error);
    }
  });

};
