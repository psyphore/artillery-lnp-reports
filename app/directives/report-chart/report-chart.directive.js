'use strict';

angular
  .module('artillerylnprc.directives.report-chart-directive', [])
  .controller('controller', ['$scope', controller])
  .directive('reportChart', [reportChart]);

function controller($scope) {
  $scope.report = {};

  $scope.getObjectFields = function(object) {
    return Object.entries(object);
  };
}

function reportChart() {
  return {
    restrict: 'E',
    templateUrl: 'directives/report-chart/report-chart.directive.html',
    scope: {
      data: '='
    }
  };
}
