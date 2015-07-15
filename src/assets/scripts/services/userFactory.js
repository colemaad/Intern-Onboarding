app.factory('promiseFactory', function(resourceFactory) {
	var promises = {};

	promises.get = function(id) {
		return resourceFactory.get(id).$promise;
	};

	promises.create = function(user) {
		return resourceFactory.save(user).$promise;
	};

	promises.list = function() {
		return resourceFactory.query().$promise;
	};

	promises.remove = function(id) {
		return resourceFactory.remove(id).$promise;
	};

	promises.update = function(user) {
		return resourceFactory.update(user).$promise;
	};

	return promises;

});
