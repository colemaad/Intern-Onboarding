app.directive('userForm', function() {
	return {
		restrict: 'E',
		templateUrl: function(elem, attr) {
			return 'partials/'+attr.type+'Form.html'
		}
	};
});
