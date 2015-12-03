(function(angular) {
  'use strict';

  function MenuServiceFactory($http) {

    function MenuService() {}

    MenuService.getMenu = function(aLocation) {
      return $http({
        method: 'GET',
        url: '/assets/data/' + aLocation + "-menu.json"
    });
    };

    return MenuService;
  }

  angular.module('ovorooApp').factory('MenuService', MenuServiceFactory);

}(angular));
