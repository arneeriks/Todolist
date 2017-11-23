/**
 * Created by arne on 23.11.2017.
 */

angular.module('todolist')
    .factory('personService', ['$http', function ($http) {

        var person =  {};

        var server_url = "http://localhost:5000/";

        return {
            getPersons: getPersons,
            addPerson: addPerson
        }

        function getPersons() {
            return $http.get(server_url + "personService2.svc/persons");
        }

        function addPerson () {
            return $http.post(server_url)
        }

}]);