angular.module('app').directive('disqusComments', disqusComments);

disqusComments.$inject = [ '$window', 'script' ];

function disqusComments($window, script) {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            element.attr('id', 'disqus_thread');
            $window.disqus_shortname = attrs.shortname;
            script.load('https://' + attrs.shortname + '.disqus.com/embed.js');
        }
    };
}
