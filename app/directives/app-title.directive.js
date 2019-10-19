'use strict';

angular.module('artillerylnprc.directives.appTitle-directive', [])

.directive('appTitle', appTitle);

function appTitle() {
  return {
    restrict: 'E',
    template: `
      <h2 class="display-3">
        {{text}}
      </h2>
      `,
    scope: {
      text: '='
    }
  }
}