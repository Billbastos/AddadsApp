'use strict';

angular.module('mean.getName').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('getName example page', {
      url: '/getName/example',
      templateUrl: 'getName/views/index.html'
    });
  }
]);
