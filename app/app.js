'use strict';

angular
  .module('artillerylnprc', [
    'ngRoute',
    'ngResource',
    'artillerylnprc.directives',
    'artillerylnprc.services',
    'artillerylnprc.controllers'
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
