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
	$routeProvider.when('/', {templateUrl: 'partials/home.html'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html'});
	$routeProvider.when('/thoughts', {templateUrl: 'partials/thoughts.html'});
	$routeProvider.when('/resume', {templateUrl: 'partials/resume.html'});
	$routeProvider.when('/works', {templateUrl: 'partials/works.html'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);

function IntroCtrl($scope){
	$scope.positions = [
		{value: 1, name: 'User Experience Designer'},
		{value: 2, name: 'Product Designer'},
		{value: 3, name: 'Front-end Developer'},
		{value: 4, name: 'Product Manager'}
	];
	$scope.position = $scope.positions[0];
}