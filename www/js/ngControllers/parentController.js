define(['angularAMD'], function(angularAMD){

    function ParentCtrl($scope, $timeout) {
      var vm = this;
      vm.cities = ["NY", "Amsterdam", "Barcelona"];
      $timeout(function(){
        //vm.cities.push("Thamarassery")
      },2000)
    }
    angularAMD.controller('ParentCtrl', ['$scope','$timeout', ParentCtrl]);

})