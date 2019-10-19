'use strict';

var serviceModule = angular.module('artillerylnprc.services.data-service', [
  'ngResource'
]);

serviceModule.factory('dataService', ['$resource', dataService]);

serviceModule.factory('directoryService', ['$resource', directoryService]);

function dataService($resource) {
  return $resource('assets/:fileName.json', { fileName: '@fileName' });
}

function directoryService($resource) {
  return $resource('assets/');
}
