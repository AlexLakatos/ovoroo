'use strict';

/**
 * @ngdoc function
 * @name ovorooApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ovorooApp
 */
angular.module('ovorooApp')
  .controller('MainCtrl', function(MenuService, OrderService, locations, $scope, $location, $rootScope) {

    function load() {
      $scope.locations = locations;
      $scope.location = "";
      $rootScope.page = "main";

      if (!$rootScope.user) {

          $location.path("/landing");
      }

      $scope.item = {};

      $scope.loading = true;

      $scope.loading = false;

      $scope.location = "london";
      $scope.chooseOrderType("start");

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
        $scope.item.requester = $rootScope.user;

        var order = {
            "owner": $rootScope.user,
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
