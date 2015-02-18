"use strict";

/* global console, angular, module, describe, it, inject, beforeEach, render */
/* jshint esnext: true, node: true */

// Declaring the stub application to inject our directive into
angular
    .module("test", [ "ngOnload" ])
    .controller("TestController", [
        "$scope",
        ($scope) => {
            $scope.helloTest = (done) => {
                console.log("Hello spec test");
                done();
            };
        }
    ]);

describe("Ng-onload", () => {
    var element;
    var scope;

    beforeEach(() => {
        module("test");
    });

    beforeEach(inject(($rootScope) => {
        scope = $rootScope.$new();
    }));

    it("Should trigger on iframe onload.", (done) => {

        inject(function ($compile) {
            element = angular.element("<div ng-app=\"test\" ng-controller=\"TestController\"> " +
                "<iframe src=\"../test/index.test.html\" element-onload=\"done\"> </iframe> " +
            "</div>");

            element = $compile(element)(scope);
            scope.$digest();
            // done();
        });
    });
});
