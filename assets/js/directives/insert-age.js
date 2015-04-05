(function() {
    'use strict';

    angular.module('app').directive('insertAge', insertAge);

    function insertAge() {

        function dateToAge(dateString) {
            var birth = new Date(dateString);
            return Math.floor((new Date() - birth) / 31536e6);
        }

        return {
            scope: {
                dateToAge: '@'
            },
            restrict: 'E',
            template: '{{ age }}',
            link: function(scope) {
                scope.age = dateToAge(scope.dateOfBirth);
            }
        };
    }
}());
