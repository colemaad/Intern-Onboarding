app.directive('usersEdit', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'partials/edit.html',
		scope: {
			modUser: '=',
			userName: '@',
			editUser: '&',
			redirect: '&',
		}
	};
});
