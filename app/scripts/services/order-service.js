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

    return OrderService;
  }

  angular.module('ovorooApp').factory('OrderService', OrderServiceFactory);

}(angular));
