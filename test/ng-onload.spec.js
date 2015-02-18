"use strict";
/* jshint esnext: true */

var app = angular.module("test", [  ]);

describe("ng-onload", () => {
    beforeEach(() => {

    });

    it("should set default alt property for an avatar that cannot be loaded", (done) => {
        inject(function ($compile) {
            element = angular.element("<iframe src=\"www.google.com\" ng-onload=\"www.google.com\"> </iframe>");
            element = $compile(element)(scope);
            scope.$digest();
        });
    });
});
