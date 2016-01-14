'use strict';

/* jshint -W098 */
angular.module('mean.getName').controller('GetNameController', ['$http','$scope', 'Global', 'GetName',
  function($http, $scope, Global, GetName) {
    $scope.global = Global;
    $scope.package = {
      name: 'getName'
    };

    $scope.showMessage = function(user) {

      $http.get('http://dev.addictiveadsnetwork.com/api/v1/test/hello/'+user.name).success(function(json){
        user.data = json.data;
      })

    };
  }
]);
