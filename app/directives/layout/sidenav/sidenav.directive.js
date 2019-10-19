'use strict';

angular
  .module('artillerylnprc.directives.side-nav-directive', [])

  .directive('sideNav', sideNav);

function sideNav() {
  return {
    restrict: 'E',
    templateUrl: 'directives/layout/sidenav/sidenav.directive.html',
    scope: {
      data: '='
    }
  };
}
