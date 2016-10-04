// Declaring the stub application to inject our directive into
angular
	.module("test", [ "ngOnload" ])
	.controller("TestController", function($scope) {
		$scope.helloTest = function(contentLocation) {
			console.log("Hello world!", contentLocation);
		};
	});
