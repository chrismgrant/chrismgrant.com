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
	$routeProvider.when('/lyft', {templateUrl: 'partials/lyft.html'});
	$routeProvider.when('/circle', {templateUrl: 'partials/circle.html'});
	$routeProvider.when('/jawbone', {templateUrl: 'partials/jawbone.html'});
	$routeProvider.when('/maya', {templateUrl: 'partials/maya.html'});
	$routeProvider.when('/other', {templateUrl: 'partials/other.html'});	
	$routeProvider.when('/photography', {templateUrl: 'partials/photography.html'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);

function IntroCtrl($scope){
	$scope.positions = [
		{value: 1, name: 'UX Designer'},
		{value: 2, name: 'Product Designer'},
		{value: 3, name: 'Front-end Developer'},
		{value: 4, name: 'Photographer'},
		{value: 5, name: 'Cyclist'},
		{value: 6, name: 'Denim Enthusiast'},
		{value: 7, name: 'Pro Pillow Fighter'}
	];
	$scope.position = $scope.positions[0];
}

function GalleryCtrl($scope){
	$scope.photos = [
	{url: 'images/photos/1.jpg'},
	{url: 'images/photos/2.jpg'},
	{url: 'images/photos/3.jpg'},
	{url: 'images/photos/4.jpg'},
	{url: 'images/photos/5.jpg'},
	{url: 'images/photos/6.jpg'},
	{url: 'images/photos/7.jpg'},
	{url: 'images/photos/8.jpg'},
	{url: 'images/photos/9.jpg'},
	{url: 'images/photos/10.jpg'},
	{url: 'images/photos/11.jpg'},
	{url: 'images/photos/12.jpg'}
	];
}