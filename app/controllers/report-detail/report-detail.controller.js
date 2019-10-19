'use strict';

angular
  .module('cardinal.controllers.report-detail-controller', [
    'ngRoute',
    'cardinal.services'
  ])
  .config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/report/detail/:reportName', {
        templateUrl: 'controllers/report-detail/report-detail.controller.html',
        controller: 'reportDetailController'
      });
    }
  ])
  .controller('reportDetailController', [
    '$scope',
    'dataService',
    '$routeParams',
    reportDetailController
  ]);

function reportDetailController($scope, dataService, $routeParams) {
  $scope.detail = null;
  $scope.errorMessage = '';
  $scope.reportName = $routeParams.reportName;
  $scope.title = `${$scope.reportName} Details`;
  $scope.loadingMessage = 'Please wait...';

  var ds = dataService.get({ fileName: $scope.reportName });
  ds.$promise
    .then(function(data) {
      console.log(data);
      $scope.detail = data;
    })
    .catch(function(err) {
      $scope.errorMessage = err.message;
      $scope.detail = null;
    });
}
