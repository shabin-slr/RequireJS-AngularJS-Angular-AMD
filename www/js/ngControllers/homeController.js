define(['angularAMD'], function(angularAMD){

    function homeController($scope) {
        var vm = this;

        console.log("This is Home Controller")
         
    }
    angularAMD.controller('homeController', ['$scope', homeController]);
})
