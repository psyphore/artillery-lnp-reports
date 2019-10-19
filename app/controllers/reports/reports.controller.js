'use strict';

angular
  .module('artillerylnprc.controllers.reports-controller', [
    'ngRoute',
    'artillerylnprc.services'
  ])
  .config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/reports', {
        templateUrl: 'controllers/reports/reports.controller.html',
        controller: 'landingController'
      });
    }
  ])
  .controller('landingController', [
    '$scope',
    '$interval',
    'directoryService',
    reportsController
  ]);

function reportsController($scope, $interval, directoryService) {
  $scope.collection = [];
  $scope.errorMessage = '';
  $scope.title = 'Load & Performance Reports';
  $scope.loadingMessage = 'Please wait...';

  var dir = directoryService.get({});
  dir.$promise
    .then(function(list) {
      console.log(list);
      $scope.collection = Array.from(list.files).filter(function(value) {
        return value.type === 'file';
      });
    })
    .catch(function(err) {
      $scope.errorMessage = err.message;
      console.error(err);
    });
}
