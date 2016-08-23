'use strict';
require.config({

    /*  * The root path to use for all module lookups.
        * If no baseUrl is explicitly set in the configuration, the default value will be the location of the HTML page that loads require.js.
        * If a data-main attribute is used, that path will become the baseUrl.
    */
    //baseUrl : '../../',

    /* The number of seconds to wait before giving up on loading a script. Setting it to 0 disables the timeout. The default is 7 seconds. */
    waitSeconds : 0,

    paths : {
        jQuery : 'libs/jquery-1.11.3.min',
        angular : 'libs/angular.min',
        angularAMD : 'libs/angularAMD.min',

        app : 'js/app',

        parentController : 'js/ngControllers/parentController',
        childController : 'js/ngControllers/childController',

        childDirective : 'js/ngDirectives/childDirective',
        childDirectiveController : 'js/ngDirectives/childDirectiveController'
    },

    //Remember: only use shim config for non-AMD scripts,
    //scripts that do not already call define(). The shim
    //config will not work correctly if used on AMD scripts,
    //in particular, the exports and init config will not
    //be triggered, and the deps config will be confusing
    //for those cases.
    shim : {
        angular : { deps : ['jQuery'], exports : 'angular'},
        angularAMD : { deps : ['angular'] }
    },

    deps : ['app']

})