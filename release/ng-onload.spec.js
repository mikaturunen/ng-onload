"use strict";

/* global console, angular, module, describe, it, inject, beforeEach, render */
/* jshint esnext: true, node: true */

// Declaring the stub application to inject our directive into
angular.module("test", ["ngOnload"]).controller("TestController", ["$scope", function ($scope) {
    $scope.helloTest = function (done) {
        console.log("Hello spec test");
        done();
    };
}]);

describe("Ng-onload", function () {
    var element;
    var scope;

    beforeEach(function () {
        module("test");
    });

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it("Should trigger on iframe onload.", function (done) {
        inject(function ($compile) {
            element = angular.element("<div ng-app=\"test\" ng-controller=\"TestController\"> " + "<iframe src=\"../test/index.test.html\" element-onload=\"done\"> </iframe> " + "</div>");

            element = $compile(element)(scope);
            scope.$digest();
            // done();
        });
    });
});