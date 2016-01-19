'use strict';

angular.module('mean.getName').config(['$viewPathProvider','$stateProvider',
  function( $viewPathProvider, $stateProvider) {

    $stateProvider
        .state('getName', {
          url: '/getName/views',
          templateUrl: 'getName/views/index.html'
        });

    $viewPathProvider.override('system/views/index.html', 'getName/views/index.html');




  }
]);
