app.controller('usersController', function($scope, $state, $modal, $log, userService) {
	userService.getUsers();
	$scope.user = angular.copy(userService.user);
	$scope.newUser = angular.copy($scope.user);
	$scope.orderRadio = 'firstName';
	$scope.reverse = false;
	$scope.uniqueEmail = true;
	userInfo = {phone: false, email: false};

	$scope.addUser = function(user) {
		userService.addUser(user);
	};

	$scope.selectUser = function(user) {
		$scope.user = user
	};

	$scope.editUser = function(user) {
		user.phone = $scope.cleanPhoneNumber(user.phone);
		userService.editUser(user);
		userService.getUsers();
	};

	$scope.createEditUser = function() {
		$scope.modUser = angular.copy($scope.user);
	}

	$scope.deleteUser = function(user) {
		userService.deleteUser(user);
	};

	$scope.redirect = function() {
		if ($scope.user == null) {
			$state.go('users');
		};
	};

	$scope.checkEmail = function(newEmail) {
		$scope.uniqueEmail = true;
		angular.forEach($scope.users, function(usr){
			if(usr.email == newEmail) {
				$scope.uniqueEmail = false;
			};
		});
	};

	$scope.openModal = function() {
		var modalInstance = $modal.open({
			templateUrl: 'partials/Modal.html',
			controller: 'modalInstanceController',
			resolve: {
				user: function() {
					return $scope.user;
				},
			}
		});
	};

	$scope.$on('UPDATE_USERS', function(event, newUsersList){
		$scope.users = angular.copy(newUsersList);
	})
});
