'use strict';

// Declare app level module which depends on views, and components
angular.module('travelApp', [
  'ngRoute',
  'travelApp.home',
  'travelApp.home2',
  'travelApp.places',
  'travelApp.contact',
  'travelApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
