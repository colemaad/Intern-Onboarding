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
			it('should edit user', function() {
				expect('app.usersController.createEditUser').not.toBe(null);
			});
			it('should select user', function() {
				scope.selectUser(data);
				expect(scope.user).toBe(data);
			});
			it('should add user ', function() {
				spyOn(userService, 'addUser');
				scope.addUser(data);
				expect(userService.addUser).not.toThrowError(TypeError);
			});
			it('should delete user', function() {
				spyOn(userService, 'deleteUser');
				scope.deleteUser(data);
				expect(userService.deleteUser).not.toThrowError(TypeError);
			});
			it('should open modal', function() {
				expect('app.usersController.openModal').toBeTruthy;
			});
			it('should check email', function() {
				expect('app.usersController.checkEmail').toBeTruthy;
			});
			it('should check redirect', function(){
				expect('app.usersController.redirect').not.toBe(null);

			});

		});
	});
});
