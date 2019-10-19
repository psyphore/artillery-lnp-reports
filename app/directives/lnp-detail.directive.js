'use strict';

angular
  .module('artillerylnprc.directives.lnpDetail-directive', [])

  .directive('lnpDetail', lnpDetail);

function lnpDetail() {
  return {
    restrict: 'E',
    templateUrl: 'views/lnp-detail.directive.html',
    scope: {
      data: '='
    }
  };
}
