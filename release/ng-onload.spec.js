"use strict";

/* global console, angular, module, describe, it, inject, beforeEach, render */
/* jshint esnext: true, node: true */

// Declaring the stub application to inject our directive into
angular.module("test", []).controller("TestController", ["$scope", function ($scope) {
    $scope.helloTest = function (done) {
        console.log("Hello spec test");
        done();
    };
}]);

describe("Ng-onload", function () {
    var element;
    var scope;
    var $compile;

    beforeEach(module("ngOnload"));

    describe("Iframe", function () {
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            scope = _$rootScope_.$new();
        }));

        it("Should trigger onload event.", function (done) {
            element = angular.element("<iframe src=\"../test/index.test.html\" element-onload=\"alert()\"> </iframe>");

            element = $compile(element)(scope);
            scope.$digest();
            // done();
        });
    });
});