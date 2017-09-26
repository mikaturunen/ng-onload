// Declaring the stub application to inject our directive into
angular
	.module("test", [ "ngOnload" ])
	.controller("TestController", function($scope, $document) {
		$scope.helloTest = function(contentLocation) {
			console.log("Hello world!", contentLocation);
		};
		setInterval(function () {
			$document.find('iframe')[0].src = 'index.test.html';
		}, 1000);
	});
