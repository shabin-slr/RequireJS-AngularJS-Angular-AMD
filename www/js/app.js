define(['angularAMD', 'parentController', 'childController', 'childDirective','angularRoute'], function(angularAMD){
    
    var myapp = angular.module("myapp", ['ngRoute']);

    myapp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider.when('/home', angularAMD.route({
            templateUrl: 'views/home.html',
            controller: 'homeController',
            controllerAs: 'ctrl',
            controllerUrl: 'js/ngControllers/homeController',
        })).when('/another-page', angularAMD.route({
            templateUrl: 'views/another-page.html',
            controller: 'anotherController',
            controllerAs: 'ctrl',
            controllerUrl: 'js/ngControllers/anotherController',
        }));
    }])
    
    return angularAMD.bootstrap(myapp);

})
