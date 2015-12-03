'use strict';

/**
 * @ngdoc directive
 * @name ovorooApp.directive:menu
 * @description
 * # menu
 */
angular.module('ovorooApp')
  .directive('menu', function () {
    return {
      templateUrl: 'scripts/directives/menu.html',
      restrict: 'E',
      scope: {
          model: "=",
          item: "="
      },
      link: function postLink(scope/*, element, attrs*/) {
          scope.selectProduct = function selectProduct(aProduct, aSize) {
              scope.item.name = aProduct.name;
              scope.item.size = {
                  name: aSize.name,
                  price: parseFloat(aSize.price)
              };
          };

          scope.selectExtra = function selectExtra(aExtra) {
              if (!scope.item.extras) {
                  scope.item.extras = [];
              }

              aExtra.price = parseFloat(aExtra.price);

              scope.item.extras.push(aExtra);
          };
      }
    };
  });
