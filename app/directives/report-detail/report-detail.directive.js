'use strict';

angular
  .module('artillerylnprc.directives.report-detail-directive', [])
  .directive('xReportDetail', [
    function() {
      return {
        restrict: 'E',
        templateUrl: 'directives/report-detail/report-detail.directive.html',
        scope: {
          detail: '='
        },
        controller: function($scope, $element, $interval) {
          $scope.getObjectFields = function(object) {
            return Object.entries(object);
          };

          debugger;
          console.log($scope);
          console.log($element);
          console.log($interval);
        }
      };
    }
  ]);
