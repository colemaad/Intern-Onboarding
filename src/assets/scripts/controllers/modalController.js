app.controller('modalInstanceController', function($scope, $modalInstance, $state, user, userService){
	$scope.user = user;
	$scope.delete = function() {
		userService.deleteUser($scope.user);
		$modalInstance.close();
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
	$scope.save = function() {
		$modalInstance.dismiss('cancel');
	}
})
