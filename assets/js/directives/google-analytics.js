(function() {
    'use strict';

    angular.module('app').directive('googleAnalytics', googleAnalytics);

    googleAnalytics.$inject = [ '$window', 'Script' ];

    function googleAnalytics($window, Script) {
        return {
            restrict: 'E',
            link: function(scope, element, attrs) {

                var objectName = 'rename' in attrs ? attrs.rename : 'ga';

                function ga() {
                    ga.q.push(arguments);
                    ga.l = 1 * new Date();
                }

                ga.q = [];
                ga('create', attrs.trackingId, 'auto');
                ga('send', 'pageview');

                $window.GoogleAnalyticsObject = objectName;
                $window[objectName] = ga;

                Script.load('https://www.google-analytics.com/analytics.js');
            }
        };
    }
}());
