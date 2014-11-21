(function() {
    'use strict';

    angular.module('app').directive('disqusComments', disqusComments);

    disqusComments.$inject = [ '$window', 'Script' ];

    function disqusComments($window, Script) {
        return {
            restrict: 'E',
            link: function(scope, element, attrs) {
                element.attr('id', 'disqus_thread');
                $window.disqus_shortname = attrs.shortname;
                Script.load('https://' + attrs.shortname + '.disqus.com/embed.js');
            }
        };
    }
}());
