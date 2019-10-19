'use strict';

angular
  .module('cardinal.directives.header-nav-directive', [])

  .directive('headerNav', [headerNav]);

function headerNav() {
  return {
    restrict: 'E',
    templateUrl: 'directives/layout/header/header-nav.directive.html',
    scope: {
      data: '='
    }
  };
}
