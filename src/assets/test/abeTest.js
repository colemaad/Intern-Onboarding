describe('Testing Services', function() {

	var abe = {
		_id:22,
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
	};


	beforeEach(module('app'));

	beforeEach(inject(function(_$httpBackend_) {
		backEnd = _$httpBackend_;
		backEnd.whenGET('http://localhost:24149/users').respond();
		backEnd.whenPOST('http://localhost:24149/users').respond();
		backEnd.whenPUT('http://localhost:24149/users/22').respond();
		backEnd.whenDELETE('http://localhost:24149/users/22').respond();
	}));
	afterEach(function() {
	 backEnd.verifyNoOutstandingExpectation();
	 backEnd.verifyNoOutstandingRequest();
 });

	describe('userService', function() {

		beforeEach(inject(function (_userService_) {
			userService = _userService_;

		}));
		it('should get list of users', function() {
			backEnd.expect('GET', 'http://localhost:24149/users');
			userService.getUsers();
			backEnd.flush();
		});
		it('should add user', function() {
			backEnd.expect('POST', 'http://localhost:24149/users');

			
			userService.addUser();
			backEnd.flush();
		});
		it('should edit and save a user ', function() {
			backEnd.expect('PUT', 'http://localhost:24149/users/22');
			userService.editUser(abe);
			backEnd.flush();
		});
		it('should delete a user', function() {
			backEnd.expect('DELETE', 'http://localhost:24149/users/22');
			userService.deleteUser(abe);
			backEnd.flush();
		});

	});

});
