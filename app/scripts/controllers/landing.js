'use strict';

/**
 * @ngdoc function
 * @name ovorooApp.controller:LandingCtrl
 * @description
 * # LandingCtrl
 * Controller of the ovorooApp
 */
angular.module('ovorooApp')
  .controller('LandingCtrl', function(MenuService, OrderService, locations, $scope, $location, $rootScope) {

    function load() {
      $scope.locations = locations;
      $scope.location = "";
      $rootScope.page = "landing";

      $scope.item = {};

      $scope.loading = true;

      $scope.user = {
          name: "Alex",
          email: "alex@alex.com"
      };

      $scope.loading = false;

  }

    $scope.chooseLocation = function chooseLocation(aLocation) {
      $scope.location = aLocation;
    };

    $scope.chooseOrderType = function chooseOrderType(aOrderType) {
      $scope.orderType = aOrderType;

      MenuService.getMenu($scope.location).then(
        function successCallback(response) {
            $scope.menu = response.data;
        },
        function errorCallback() {
          //
        });

    };

    $scope.createOrder = function createOrder() {
        $scope.item.requester = $scope.user;

        var order = {
            "location": $scope.location,
            "products": [$scope.item]
        };

        OrderService.postOrder(order).then(
          function successCallback(response) {
              $location.path("/order/" + response.data.id);
          },
          function errorCallback(response) {
            console.log(response);
          });
    };

    load();
  });
