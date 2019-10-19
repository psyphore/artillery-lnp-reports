'use strict';

angular
  .module('artillerylnprc.directives.report-directive', [])
  .controller('controller', ['$scope', controller])
  .directive('reportDetail', [lnpDetail]);

function controller($scope) {
  $scope.report = {};

  $scope.getObjectFields = function(object) {
    return Object.entries(object);
  };
}

function lnpDetail() {
  return {
    restrict: 'E',
    templateUrl: 'lnp-detail.directive.html',
    scope: {
      data: '='
    }
  };
}
