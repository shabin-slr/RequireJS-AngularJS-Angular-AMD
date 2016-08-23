define(['angularAMD'], function(angularAMD){

    function ChildCtrl($scope, $timeout) {
        var vm = this;
        vm.parentCities = $scope.pc.cities;
    }
    angularAMD.controller('ChildCtrl', ['$scope', '$timeout', ChildCtrl]);
})
