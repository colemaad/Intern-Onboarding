describe('Main Test ', function() {
	beforeEach(module('uxiApp'));
	beforeEach(inject(function (_userService_) {
	}));

  describe('Controller Function Test ', function() {
		it('should be usersController', function() {
			expect('uxiApp.usersController').toBeDefined();
		});
    it('should be editController', function() {
      expect('uxiApp.editController').toBeDefined();
    });
    it('should have modalInstanceController', function() {
      expect('uxiApp.modalInstanceController').toBeDefined();
    });
    it('should be newController', function() {
      expect('uxiApp.newController').toBeDefined();
    });
    it('should be profileController', function() {
      expect('uxiApp.profileController').toBeDefined();
    });

  });
});
