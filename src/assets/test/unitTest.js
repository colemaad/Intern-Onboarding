describe('Main Test ', function() {
	beforeEach(module('app'));

  describe('Controller Function Test ', function() {
		it('should be user controller', function() {
			expect('app.usersController').toBeDefined();
		});
    it('should be edit controller', function() {
      expect('app.editController').toBeDefined();
    });
    it('should be modal controller', function() {
      expect('app.modalInstanceController').toBeDefined();
    });
    it('should be new controller', function() {
      expect('app.newController').toBeDefined();
    });
    it('should be profile controller', function() {
      expect('app.profileController').toBeDefined();
    });

  });

	var data = {
		firstName: "Aber",
		lastName: "Coler",
		phone: "239-678-9999",
		email: "coler@banno.com"
	};

	describe('actual content controllers ', function() {
		var peeps, scope;
		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			peeps = $controller('usersController', {$scope: scope});
		}));


	});
});
