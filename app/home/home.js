'use strict';

angular.module('travelApp.home', ['ngRoute', 'travelApp.home2'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    });
  }])
  .controller('HomeCtrl', ['$scope', '$http', 'homeService', function ($scope, $http, homeService) {
    $scope.message = '';
    $scope.name = name.name;

    homeService.getRestaurants().then(function (data) {
      $scope.names = data.data;
      $scope.order = data.data.value;
      console.log("oders:" + $scope.names);
    });
  }]);