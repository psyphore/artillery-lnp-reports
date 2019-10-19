'use strict';

angular
  .module('cardinal', [
    'ngRoute',
    'ngResource',
    'cardinal.directives',
    'cardinal.services',
    'cardinal.controllers'
  ])

  .config([
    '$locationProvider',
    '$routeProvider',
    '$resourceProvider',
    configure
  ])

  .constant('_', window._)
  .constant('$', window.$);

function configure($locationProvider, $routeProvider, $resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({ redirectTo: '/' });
}
