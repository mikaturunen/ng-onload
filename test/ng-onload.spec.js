"use strict";

/* global console, angular, module, describe, it, inject, beforeEach, render */
/* jshint esnext: true, node: true */

describe("Ng-onload", () => {
    var element;
    var scope;
    var $compile;

    describe("Iframe", () => {
        beforeEach(module("ngOnload"));

        beforeEach(inject((_$compile_, _$rootScope_) => {
            $compile = _$compile_;
            scope = _$rootScope_.$new();
        }));

        it("Should trigger onload event.", (done) => {
            scope.done = done;
            element = angular.element("<iframe src=\"../test/index.test.html\" ng-onload=\"scope.done\"> </iframe>");

            element = $compile(element)(scope);
            scope.$digest();
            // done();
        });
    });
});
