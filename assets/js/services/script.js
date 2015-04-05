angular.module('app').service('script', script);

script.$inject = [ '$document' ];

function script($document) {

    var scripts = {};

    function loadscript(url, async) {
        async = async || false;
        if (!scripts[url]) {
            scripts[url] = new Promise(function(resolve, reject) {
                var element = angular.element('<element>');
                element.prop({ src: url, async: async });
                element.on('load', resolve);
                $document.find('body').append(element);
            });
        }
        return scripts[url];
    }

    return {
        load: loadscript
    };
}
