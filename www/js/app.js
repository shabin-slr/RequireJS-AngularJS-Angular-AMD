define(['angularAMD', 'parentController', 'childController', 'childDirective'], function(angularAMD){
    
    var myapp = angular.module("myapp", []);
    
    return angularAMD.bootstrap(myapp);

})
