# ng-onload
Binds Angular.js scope function to given HTML elements onload event; for example, iframe.


## Installation

    bower install ng-onload --save



## Usage example
### TL;DR
Super short version of how to use the ng-load directive in your Angular application.

    // Include it in Angular as per
    angular.module("magicalRocketUnicornApplication", [ "ngOnload" ])

    // After that it's ready to rock - Usage in HTML
    <iframe src="www.foobar.com" ng-onload="callbackFromScope"></iframe>


### Longer version
A longer example with some other Angular content included that you'll normally have in your Angular.js application.

application.js:

    // Creating magical Angular application to solve problem X
    var app = angular.module("magicalRocketUnicornApplication", [ "ngOnload" ]);

    // Adding some additional controllers to the application
    app.controller("UnicornController", function($scope) {
        // This is the scope callback we are going to call when the elements
        // onload event triggers

        $scope.hello = function() {
            alert("Hello world!");
        };
    });


index.html:

    <!doctype html>
        <head>
            <meta charset="utf-8">
            <script src="../bower_components/angular/angular.min.js"></script>
            <script src="../bower_components/ng-load/release/ng-onload.min.js"></script>
            <script src="application.js"></script>
        </head>
        <body>
            <div ng-app="magicalRocketUnicornApplication" ng-controller="UnicornController">
                <iframe src="http://some.location.com/somewhere" ng-onload="hello()"></iframe>
            </div>
        </body>
    </html>


# Other
