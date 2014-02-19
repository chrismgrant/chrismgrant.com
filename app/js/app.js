'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {templateUrl: 'partials/about.html'});
  $routeProvider.when('/works', {templateUrl: 'partials/works.html'});
	$routeProvider.when('/thoughts', {templateUrl: 'partials/thoughts.html'});
	$routeProvider.when('/thoughts', {templateUrl: 'partials/resume.html'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

function MainCtrl($scope) {
	
}