'use strict';

angular
  .module('artillerylnprc.controllers.landing-controller', [
    'ngRoute',
    'artillerylnprc.services'
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
