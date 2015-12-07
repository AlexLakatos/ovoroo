'use strict';

/**
 * @ngdoc function
 * @name ovorooApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the ovorooApp
 */
angular.module('ovorooApp')
  .controller('OrderCtrl', function(MenuService, OrderService, locations, $scope, $route, $rootScope) {

    function load() {
      $scope.item = {};

      $scope.loading = true;
      $rootScope.page = "order";

      OrderService.getOrder($route.current.params.id).then(
        function successCallback(response) {
            console.log(response);
            MenuService.getMenu(response.data.location).then(
              function successCallback(response) {
                  $scope.menu = response.data;

                  console.log(response);


                  $scope.loading = false;
              },
              function errorCallback() {
                //
              });
        },
        function errorCallback(response) {
            console.log(response);
            MenuService.getMenu("london").then(
              function successCallback(response) {
                  $scope.menu = response.data;

                  console.log(response);


                  $scope.loading = false;
              },
              function errorCallback() {
                //
              });
        });
  }

    $scope.addToOrder = function addToOrder() {
        $scope.item.requester = $rootScope.user;

        OrderService.putOrder($route.current.params.id, $scope.item).then(
          function successCallback(response) {
              console.log(response);
          },
          function errorCallback(response) {
            console.log(response);
          });
    };

    load();
  });
