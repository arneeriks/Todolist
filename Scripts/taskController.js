/**
 * Created by arne on 21.11.2017.
 */


angular.module('taskCtrl', [])
    .controller('taskController', [function() {
        var vm = this;

        console.log("taskCtrl");

        vm.newTask = newTask;
        vm.goBack = goBack;

        function goBack () {
            window.location.href = "/index.html";
        }

        function newTask () {
            window.location.href = "/Views/newDo.html";
        }

        vm.tasks = [
            {title: 'Rydde',
                description: "Rydde hele leiligheten",
                type: "Husarbeid",
                date: "01.01.2001",
                time: "12:00"},
            {title: 'Handle middag',
                description: "Handle middag for resten av uken",
                type: "Innkjøp",
                date: "01.01.2001",
                time: "15:00"},
            {title: 'Støvsuge',
                description: "Støvesuge alle rom i leiligheten.",
                type: "Husarbeid",
                date: "02.01.2001",
                time: "18:00"}
        ];

        console.log(vm.tasks);
    }]);