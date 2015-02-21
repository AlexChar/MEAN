// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'example' controller
angular.module('example').controller('ExampleController', ['$scope', function($scope) {
		// Get the user's 'fullName' 
		$scope.name = 'MEAN Application';
	}
]);
