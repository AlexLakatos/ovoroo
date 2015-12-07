(function(angular) {
  'use strict';

  function OrderServiceFactory($http) {

    function OrderService() {}

    OrderService.api = "http://coffeerun.ovotech.org.uk:5000";

    OrderService.postOrder = function(aOrder) {
      return $http.post(
          OrderService.api + "/orders",
          aOrder
      );
    };

    OrderService.getOrder = function(aOrderId) {
      return $http.get(
          OrderService.api + "/orders/" + aOrderId
      );
    };

    OrderService.putOrder = function(aOrderId, aItem) {
      return $http.put(
          OrderService.api + "/orders/" + aOrderId + "/items",
          aItem
      );
    };

    return OrderService;
  }

  angular.module('ovorooApp').factory('OrderService', OrderServiceFactory);

}(angular));
