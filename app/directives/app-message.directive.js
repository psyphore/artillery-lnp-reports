'use strict';

angular.module('artillerylnprc.directives.appMessage-directive', [])

.directive('appMessage', appMessage);

function appMessage() {
  return {
    restrict: 'E',
    template: `
      <div class="alert alert-{{type}}" role="alert">
        {{content}}
      </div>
    `,
    scope: {
      content: '=',
      type: '='
    }
  }
}