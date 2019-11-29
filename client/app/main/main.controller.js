'use strict';

angular.module('svrTestTaskApp')
  .controller('MainController', function ($scope, $http, $modal) {
    $http.get('/api/things').then(function (response) {
      $scope.parseDate = function (date) {
        return new Date(Date.parse(date));
      };
      $scope.expandSelected = function (cap_expanded) {
        $scope.cap_expanded = !cap_expanded;
      };
      $scope.cap_expanded = false;
      $scope.data = JSON.parse(response.data);
    });
  });
