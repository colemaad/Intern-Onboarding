app.directive('usersNew', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'partials/users.new.html',
		scope: {
			users: '=',
			newUser: '=',
			addUser: '&',
			uniqueEmail: '@',
			checkEmail: '&',
		}
	};
});
