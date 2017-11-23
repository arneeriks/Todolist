/**
 * Created by arne on 20.11.2017.
 */


angular.module('todolist', [])
    .controller('mainController', [function(personService) {
        var vm = this;

        vm.newPerson = newPerson;
        vm.goToTaskList = goToTaskList;
        vm.testServer = testServer;

        personService.getPersons().then(function (resp) {
             console.log(resp);
        });

        function testServer () {
            personService.getPersons();
        }

        function goToTaskList () {
            window.location.href = "Views/taskList.html";
        }

        function newPerson () {
            window.location.href = "Views/newDo.html";
        }
        vm.persons = [
            {name: 'Arne Eriksen',
            email: "arne@eriksen.no",
            mobile: "98765432"},
            {name: 'Per Persen',
            email: "per@persen.no",
            mobile: "81549300"},
            {name: 'Geir Gerisen',
            email: "geir@gerisen.no",
            mobile: "52817144"},
            {name: 'Jon Jonsen',
            email: "jon@jonsen.no",
            mobile: "12345678"}
        ];
    }]);