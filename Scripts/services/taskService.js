/**
 * Created by arne on 23.11.2017.
 */


angular.module('taskService', [])
    .factory('taskService', [function ($http) {

        var person =  {};

        var server_url = "http://localhost:5000/";

        return {
            getTasks: getTasks,
            addTasks: addTask
        }

        function getTasks() {
            return $http.get(server_url);
        }

        function addTask () {
            return $http.post(server_url)
        }

    }]);