(function() {
    'use strict';

    angular.module('app').directive('bookmarklet', bookmarklet);

    bookmarklet.$inject = [ '$http', '$log' ];

    function bookmarklet($http, $log) {
        return {
            restrict: 'E',
            transclude: true,
            template: '<a href="javascript:{{ code }}" ng-transclude></a>',
            link: function(scope, element, attrs) {
                if (!attrs.src) {
                    $log.info('Missing src for bookmarklet', element);
                    return;
                }
                $http.get(attrs.src).success(function(data) {
                    scope.code = data;
                    element.children('a').on('click', function(e) {
                        e.preventDefault();
                        alert('Please drag to your bookmarks');
                    });
                });
            }
        };
    }
}());
