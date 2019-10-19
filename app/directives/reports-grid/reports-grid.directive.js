'use strict';

angular
  .module('cardinal.directives.reports-grid-directive', [])
  .controller('gridController', ['$scope', function($scope) {}])
  .directive('reportsGrid', [reportsGrid]);

function reportsGrid() {
  return {
    restrict: 'E',
    templateUrl: 'directives/reports-grid/reports-grid.directive.html',
    scope: {
      data: '='
    }
  };
}
