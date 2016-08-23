define(['angularAMD', 'childDirectiveController'], function(angularAMD,childDirectiveController){
    
    function ChildDirective() {
      return {
        scope: false,
        template: "<pre>{{dc.parentCities |json}}</pre>",
        controller: ['$scope', '$timeout', childDirectiveController],
        controllerAs: 'dc'
      }
    }
    //angularAMD.controller('ChildDirectiveCtrl', ['$scope', '$timeout', ChildDirectiveCtrl])
    angularAMD.directive("childDirective", ChildDirective);
})