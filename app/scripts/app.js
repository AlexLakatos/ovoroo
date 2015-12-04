'use strict';

/**
 * @ngdoc overview
 * @name ovorooApp
 * @description
 * # ovorooApp
 *
 * Main module of the application.
 */
angular
  .module('ovorooApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/order/:id', {
        templateUrl: 'views/order.html',
        controller: 'OrderCtrl',
        controllerAs: 'order'
      })
      .when('/landing', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl',
        controllerAs: 'landing'
      })
      .otherwise({
        redirectTo: '/landing'
      });
  })
  .constant("locations", ["london", "bristol"]);
