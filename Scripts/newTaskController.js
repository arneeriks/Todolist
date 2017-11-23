/**
 * Created by arne on 21.11.2017.
 */


angular.module('newTaskCtrl', [])
    .controller('newTaskController', [function() {
        var vm = this;

        vm.selectedTask = {};
        vm.newTask = {};
       // vm.newTask.date = moment().format("DD.MM.YYYY");
        vm.newTask.date = new Date();
        vm.newTask.time = new Date(1970, 01, 01, 12, 00);
        console.log(vm.newTask.date);

        vm.saveNewTask = saveNewTask;
        vm.goBack = goBack;

        function saveNewTask () {
            console.log(vm.newTask);
        }

        function goBack () {
            window.location.href = "/Views/taskList.html";
        }

        vm.taskTypes = [
            {name: 'Husarbeid',
               id: "1"},
            {name: 'Innkjøp',
                id: "2"},
            {name: 'Diverse',
                id: "3"}
        ];

    }]);