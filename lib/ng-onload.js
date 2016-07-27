"use strict";

/* jshint esnext: true, node: true */
/* global angular */

// There is no direct way of binding angular to elements onload event (as javascript elements onload callback looks into
// window.callback (global function scope)) and angular is extremely finicky with that and it does not work with the
// common way of thinking with angular. To avoid the issue we create simple angular directive that just takes care
// of the onload ballback of the iframe element and this way we get nicely wrapped onload functionality in angular :)

/**
 * Creates a angular scope bound callback to allow easier angular style callbacks into specific elements onload callback
 * through the custom 'element-onload' attribute.
 *
 * Solves case:
 *      <iframe src="www.google.com" onload="callbackGlobalFunction()"></iframe>
 *
 * Example usage (HTML):
 *      <iframe src="www.google.com" ng-onload="angularScopeCallback()"></iframe>
 */
const elementOnloadDirective = () => {
    return {
        restrict: "A",
        scope: {
            callback: "&ngOnload"
        },
        link: (scope, element, attrs) => {
            // hooking up the onload event - calling the callback on load event
            element.on("load", _ => {
				const contentLocation = element.length > 0 && element[0].contentWindow ?
					element[0].contentWindow.location : undefined;

				scope.callback({
                	contentLocation
            	});
			});
        }
    };
};
elementOnloadDirective.$inject = [ ];
elementOnloadDirective.directiveName = "ngOnload";

angular
    .module("ngOnload", [])
    .directive(elementOnloadDirective.directiveName, elementOnloadDirective);
