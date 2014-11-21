(function() {
    'use strict';

    angular.module('app').service('Script', Script);

    Script.$inject = [ '$document' ];

    function Script($document) {

        var scripts = {};

        function loadScript(url, async) {
            if (typeof async == 'undefined') async = true;
            if (!scripts[url]) {
                scripts[url] = new Promise(function(resolve, reject) {
                    var script = angular.element('<script>');
                    script.prop({ src: url, async: async });
                    script.on('load', resolve);
                    $document.find('body').append(script);
                });
            }
            return scripts[url];
        }

        return {
            load: loadScript
        };
    }
}());
