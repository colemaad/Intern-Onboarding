app.service('userService', function($rootScope, $stateParams, promiseFactory) {
	var users = [];
	var user = {};

	var findUser = function(){
		var currentUser = {};
		angular.forEach(this.users, function(usr){
			if ($stateParams.id == usr._id){
				currentUser = usr;
			}
		})
		return currentUser;
	}

	var populateUsersList = function(){
		promiseFactory.list()
			.then(function(users) {
				this.users = users;
				$rootScope.$broadcast('UPDATE_USERS', users);
			}, function(error) {
				console.log(error);
			});
	}

	function addUser(user) {
		promiseFactory.create(user)
			.then(function() {
				this.user = user;
				populateUsersList();
			}, function(error) {
				console.log(user.email + " is already being used by another user.");
			});
	};

	function editUser(user) {
		promiseFactory.update(user)
			.then(function(updatedUser) {
				this.user = updatedUser;
				populateUsersList();
			}, function(error) {
				console.log(error);
			})
	}

	function setUser() {
		return findUser();
	};

	function deleteUser(user) {
		promiseFactory.remove({id: user._id})
			.then(function() {
				populateUsersList();
			}, function(error) {
				console.log(error);
			});
	};

	function getUsers() {
		populateUsersList();
	};

	return {
		users: this.users,
		user: this.user,

		addUser: addUser,
		editUser: editUser,
		setUser: setUser,
		deleteUser: deleteUser,
		getUsers: getUsers
	}

});
