(function(angular) {
  'use strict';

  function LoginServiceFactory($http) {

    function LoginService() {}

    LoginService.api = "http://coffeerun.ovotech.org.uk:5000";

    LoginService.postLogin = function(aLogin) {
      return $http.post(
          LoginService.api + "/auth",
          aLogin
      );
    };

    return LoginService;
  }

  angular.module('ovorooApp').factory('LoginService', LoginServiceFactory);

}(angular));
