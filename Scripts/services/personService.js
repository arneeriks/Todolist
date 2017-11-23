/**
 * Created by arne on 23.11.2017.
 */

angular.module('personService')
    .factory('personService', [function ($http) {

        var person =  {};

        return {
            getPersons: getPersons
        }

        function getPersons() {
            return $http.get();
        }

}]);