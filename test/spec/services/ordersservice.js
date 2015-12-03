'use strict';

describe('Service: OrdersService', function () {

  // load the service's module
  beforeEach(module('ovorooApp'));

  // instantiate service
  var OrdersService;
  beforeEach(inject(function (_OrdersService_) {
    OrdersService = _OrdersService_;
  }));

  it('should do something', function () {
    expect(!!OrdersService).toBe(true);
  });

});
