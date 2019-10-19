'use strict';

angular
  .module('cardinal.controllers.landing-controller', [
    'ngRoute',
    'cardinal.services'
  ])
  .config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'controllers/landing/landing.controller.html',
        controller: 'landingController'
      });
    }
  ])
  .controller('landingController', ['$scope', '$interval', landingController]);

function landingController($scope, $interval) {
  $scope.title = 'Load & Performance Report';
  $scope.loadingMessage = 'Please wait...';
}
