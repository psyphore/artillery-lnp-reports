'use strict';

angular
  .module('artillerylnprc.directives.reports-grid-directive', [])
  .directive('reportsGrid', [
    function() {
      return {
        restrict: 'E',
        templateUrl: 'directives/reports-grid/reports-grid.directive.html',
        scope: {
          data: '='
        },
        controller: function($scope, $element) {
          //console.log($scope);
          //console.log($element);
        }
      };
    }
  ]);
