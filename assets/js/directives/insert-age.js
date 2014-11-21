(function() {
    'use strict';

    angular.module('app').directive('insertAge', insertAge);

    insertAge.$inject = [  ];

    function insertAge() {

        function dateToAge(dateString) {
            var birth = new Date(dateString);
            return Math.floor((new Date() - birth) / 31536e6);
        }

        return {
            restrict: 'E',
            template: '{{ age }}',
            link: function(scope, element, attrs) {
                scope.age = dateToAge(attrs.dateOfBirth);
            }
        };
    }
}());
