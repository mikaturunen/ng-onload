"use strict";

/* global console, angular, module, describe, it, inject, beforeEach */
/* jshint esnext: true, node: true */

describe("Ng-onload", () => {
    var element;
    var scope;

    beforeEach(() => {
        // Declaring the stub application to inject our directive into
        angular
            .module("test", [ "ngOnload" ])
            .controller("TestController", [
                "$scope",
                ($scope) => {
                    $scope.helloTest = () => {
                        console.log("Hello test");
                    };
                }
            ]);

        module("test");
    });

    beforeEach(inject(($rootScope) => {
        scope = $rootScope.$new();
    }));

    it("Should trigger on iframe onload.", (done) => {

        inject(function ($compile) {
            element = angular.element("<div ng-controller=\"TestController\"> " +
                "<iframe src=\"www.google.com\" ng-onload=\"helloTest()\"> </iframe> " +
            "</div>");

            element = $compile(element)(scope);
            scope.$digest();
            //console.log("TEST2");
            // done();
        });
    });
});
