'use strict';

angular
  .module('artillerylnprc.directives.report-directive', [])
  .controller('controller', ['$scope', controller])
  .directive('reportScenario', ['$interval', 'dateFilter', grid]);

function controller($scope) {
  $scope.data = [];

  $scope.getList = function(object) {
    return Object.entries(object);
  };
}

function grid($interval, dateFilter) {
  function link(scope, element, attrs) {
    var format, timeoutId;

    function updateTime() {
      element.text(dateFilter(new Date(), format));
    }

    scope.$watch(attrs.myCurrentTime, function(value) {
      format = value;
      updateTime();
    });

    element.on('$destroy', function() {
      $interval.cancel(timeoutId);
    });

    timeoutId = $interval(function() {
      updateTime();
    }, 1000);
  }

  return {
    link: link,
    restrict: 'E',
    templateUrl: 'report-scenarios.directive.html',
    scope: {
      data: '='
    }
  };
}
