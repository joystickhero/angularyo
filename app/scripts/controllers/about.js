'use strict';

/**
 * @ngdoc function
 * @name angularyoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularyoApp
 */
angular.module('angularyoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
