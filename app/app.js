'use strict';

// Declare app level module which depends on views, and components
angular.module('travelApp', [
  'ngRoute',
    'travelApp.factory',
  'travelApp.home',
  'travelApp.home2',
  'travelApp.places',
  'travelApp.contact',
  'travelApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl',
            resolve: {
                moviesPrepService: moviesPrepService
            }
  })
}]);

function moviesPrepService(homeService) {
    return homeService.getRestaurants();
}