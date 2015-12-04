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

      $scope.user = {
          name: "Alex",
          email: "alex@alex.com"
      };

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

    $scope.createOrder = function createOrder() {
        $scope.item.requester = $scope.user;

        var order = {
            "location": $scope.location,
            "products": [$scope.item]
        };

        OrderService.putOrder(order).then(
          function successCallback(response) {
              console.log(response);
          },
          function errorCallback(response) {
            console.log(response);
          });
    };

    load();
  });
