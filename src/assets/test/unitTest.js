describe('Main Test ', function() {
	beforeEach(module('app'));

  describe('Controller Initialization', function() {
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

	describe('user Controller', function() {
		var peeps, scope;
		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			peeps = $controller('usersController', {$scope: scope});

		}));
		describe('Scope Variables', function(){
			it('should set orderRadio', function() {
				expect('app.usersController.orderRadio').not.toBe(null);
			});
			it('should set orderRadio', function() {
				expect('app.usersController.$scope.reverse').toBeFalsy;
			});
			it('should set orderRadio', function() {
				expect('app.usersController.$scope.uniqueEmail').toBeTruthy;
			});


		});

		describe('Scope Functions', function() {
			it('should set orderRadio', function() {
				expect('app.usersController.createEditUser').not.toBe(null);
			});
			it('should set orderRadio', function() {
				expect('app.usersController.addUser').not.toBe(null);
			});

		});


	});
});
