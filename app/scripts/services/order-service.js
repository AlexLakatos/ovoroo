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

    OrderService.putOrder = function(aOrder) {
      return $http.put(
          OrderService.api + "/orders/" + aOrder.id,
          aOrder
      );
    };

    return OrderService;
  }

  angular.module('ovorooApp').factory('OrderService', OrderServiceFactory);

}(angular));
