# ng-onload
Binds Angular.js scope function to given HTML elements onload event; for example, iframe.

There is no direct way of binding angular to elements onload event as commonly the HTML elements `onload=""` attribute looks into the JavaScripts global name space (window.*) which is a big no-no. It used to be the norm back in the day of how to do things but with modern frameworks like AngularJs and the such the approach has changed a lot.

This is just one example (and by no means the only way) of how to get Angular behave nicely with HTML elements onload event. As `<iframe onload="test()">` looks into window.test for a callback we need to bound the onload event to look into provided angular scope for the callback.

</br>

### Installation

    bower install ng-onload --save

</br>

### Usage - TL;DR
Super short version of how to use the ng-load directive in your Angular application.

    // Include it in Angular as per
    angular.module("magicalRocketUnicornApplication", [ "ngOnload" ])

    // After that it's ready to rock - Usage in HTML
    <iframe src="www.foobar.com" ng-onload="callbackFromScope()"></iframe>

</br>

### Usage
A longer example with some other Angular content included that you'll normally have in your Angular.js application.

application.js:

    // Creating magical Angular application to solve problem X
    angular
        .module("magicalRocketUnicornApplication", [ "ngOnload" ])
        .controller("UnicornController", function($scope) {
            // This is the scope callback we are going to call when the elements
            // onload event triggers

            $scope.hello = function(contentLocation) {
                // contentLocation === iframe.contentWindow.location
                // it's undefined when contentWindow cannot be found from the bound element
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
				<!-- Notice the use of 'contentLocation' if you want to use the named parameters to get location property -->
                <iframe src="http://some.location.com/somewhere" ng-onload="hello(contentLocation)"></iframe>
            </div>
        </body>
    </html>

</br>

## Other
You can find and example .html and how it's used inside the /test directory. There currently are no specific unit tests available but feel free to contribute.

Please note that the code is written in ES6 JavaScript which is then compiled to ES5 compatible JavaScript and the compiled + uglified result can be found from /release/ng-onload.min.js.

This small angular directive started from my old GIST: https://gist.github.com/mikaturunen/f0b45def06bc83ccea9e
