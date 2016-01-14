'use strict';

angular.module('mean.getName').config(['$viewPathProvider','$stateProvider',
  function($viewPathProvider, $stateProvider) {
    $viewPathProvider.override('system/views/index.html', 'getName/views/index.html');
  }
]);
