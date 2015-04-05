angular.module('app').directive('googleAnalytics', googleAnalytics);

googleAnalytics.$inject = [ '$window', 'script' ];

function googleAnalytics($window, script) {
    return {
        scope: {
            trackingId: '@',
            rename: '@?'
        },
        restrict: 'E',
        link: function(scope) {

            var objectName = 'rename' in scope ? scope.rename : 'ga';

            function ga() {
                ga.q.push(arguments);
                ga.l = 1 * new Date();
            }

            ga.q = [];
            ga('create', scope.trackingId, 'auto');
            ga('send', 'pageview');

            $window.GoogleAnalyticsObject = objectName;
            $window[objectName] = ga;

            script.load('https://www.google-analytics.com/analytics.js');
        }
    };
}
