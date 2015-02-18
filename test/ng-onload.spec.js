"use strict";

/* global console, angular, module, describe, it, inject, beforeEach, scope */
/* jshint esnext: true, node: true */
// Targetting especially 'element' until I fix it. This is stupid, I know.
/* jshint -W117 */

describe("ng-onload", () => {

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

    it("should set default alt property for an avatar that cannot be loaded", (done) => {
        inject(function ($compile) {
            element = angular.element("<div ng-controller=\"TestController\"> " +
                "<iframe src=\"www.google.com\" ng-onload=\"www.google.com\"> </iframe> " +
            "</div>");

            element = $compile(element)(scope);
            scope.$digest();
        });
    });
});
