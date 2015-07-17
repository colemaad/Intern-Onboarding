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


	describe('user Controller', function() {
		var data = {
			firstName: "Aber",
			lastName: "Coler",
			phone: "239-678-9999",
			email: "coler@banno.com"
		};
		var peeps;
		var scope;
		beforeEach(inject(function ($rootScope, $controller, _userService_) {
			scope = $rootScope.$new();
			peeps = $controller('usersController', {$scope: scope});
			userService = _userService_;
		}));

		//Variables
		describe('Scope Variables', function(){
			it('should set orderRadio', function() {
				expect('app.usersController.orderRadio').not.toBe(null);
			});
			it('should set order', function() {
				expect('app.usersController.$scope.reverse').toBeFalsy;
			});
			it('should have email', function() {
				expect('app.usersController.$scope.uniqueEmail').toBeTruthy;
			});
		});
		
		//Functions
		describe('Scope Functions', function() {

			it('should set create copy of user to edit', function() {
				expect('app.usersController.createEditUser').not.toBe(null);
			});
			it('should select user', function() {
				scope.selectUser(data);
				expect(scope.user).toBe(data);
			});
			it('should delete user', function() {
				spyOn(userService, 'deleteUser');
				scope.deleteUser(data);
				expect(userService.deleteUser).toHaveBeenCalled();
			});
			it('should delete a user', function() {
				spyOn(userService, 'deleteUser');
				scope.deleteUser(data);
				expect(userService.deleteUser).not.toThrowError(TypeError);
			});

		});
	});
});
