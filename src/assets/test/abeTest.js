describe('Testing Services', function() {

	var abe = {
		_id:12345,
		firstName: "Aber",
		lastName: "Coler",
		phone: "239-678-9999",
		email: "coler@banno.com"
	};
	var sharon = {
		_id:21,
		firstName: "Shar",
		lastName: "Kammer",
		phone: "345-546-3478",
		email: "sharoncol@banno.com"
	}
	var list = [
		abe,
		sharon
	];

	beforeEach(module('app'));
	beforeEach(inject(function(_$httpBackend_) {
		backEnd = _$httpBackend_;
		 backEnd.whenGET('http://localhost:24149/users').respond();
		 backEnd.whenPOST('http://localhost:24149/users').respond();
		 backEnd.whenPUT('http://localhost:24149/users/12345').respond();
		 backEnd.whenDELETE('http://localhost:24149/users/12345').respond();
	}));



	describe('userService', function() {

		beforeEach(inject(function (_userService_) {
			userService = _userService_;
		}));

		it('should get users list from database via GET/QUERY request', function() {
			backEnd.expect('GET', 'http://localhost:24149/users');
			userService.getUsers();
			backEnd.flush();
		});

		it('should add a user to database via POST request', function() {
			backEnd.expect('POST', 'http://localhost:24149/users');
			userService.addUser();
			backEnd.flush();
		});

		it('should edit a user and save to database via PUT request', function() {
			backEnd.expect('PUT', 'http://localhost:24149/users/12345');
			userService.editUser(abe);
			backEnd.flush();
		});

		it('should delete a user from database via DELETE request', function() {
			backEnd.expect('DELETE', 'http://localhost:24149/users/12345');
			userService.deleteUser(abe);
			backEnd.flush();
		});

	});

});
