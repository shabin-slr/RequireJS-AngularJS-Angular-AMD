define(['angularAMD'], function(angularAMD){

    function anotherController($scope) {
        var vm = this;

        console.log("This is Another Controller")
         
    }
    angularAMD.controller('anotherController', ['$scope', anotherController]);
})
