'use strict';

angular.module('cardinal.directives.lnpGrid-directive', [])

.directive('lnpGrid',lnpGrid);

function lnpGrid(){
  return {
    restrict: 'E',
    templateUrl: 'views/lnp-grid.directive.html',
    scope: {
      data: '='
    }
  }
}