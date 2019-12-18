'use strict';

angular.module('svrTestTaskApp')
  .controller('MainController', function ($scope, $http, $modal) {
    $http.get('/api/things').then(function (response) {
      $scope.data = JSON.parse(response.data);
      $scope.cap_expanded = false;
      $scope.pp_expanded = false;
      $scope.expandSelected = function (cap_expanded) {
        $scope.cap_expanded = !cap_expanded;
      };
      $scope.expandPp = function (pp_expanded) {
        if (!pp_expanded) {
          $http.get('/api/pps').then(function (response) {
            $scope.pps = JSON.parse(response.data);
          });
        }
        $scope.pp_expanded = !pp_expanded;
      };
      $scope.parseDate = function (date) {
        return new Date(Date.parse(date));
      };
    });
  });
