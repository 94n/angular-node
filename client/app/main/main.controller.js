'use strict';

angular.module('svrTestTaskApp')
  .controller('MainController', function ($scope, $http, $modal) {
    $http.get('/api/things').then(function (response) {

    });
  });
