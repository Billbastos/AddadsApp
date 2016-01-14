'use strict';

/* jshint -W098 */
angular.module('mean.getName').controller('GetNameController', ['$scope', 'Global', 'GetName',
  function($scope, Global, GetName) {
    $scope.global = Global;
    $scope.package = {
      name: 'getName'
    };
  }
]);
