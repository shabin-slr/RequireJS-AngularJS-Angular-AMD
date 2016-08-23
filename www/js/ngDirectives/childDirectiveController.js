define(['angularAMD'], function(angularAMD){
 
    function ChildDirectiveCtrl($scope, $timeout) {
      var vm = this;
      vm.parentCities = $scope.pc.cities;
      $timeout(function(){
      	vm.parentCities.push("Thamarassery")
      },2000)
    }

    return ChildDirectiveCtrl;
});