(function(){
    angular.module('Textogram',['ui-router','angular-jwt']).config(TextogramConfig);

    function TextogramConfig($urlRouterProvider, jwtInterceptorProvider, $httpProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('register', {
            url: '/register',
            controller: 'RegisterController',
            templateUrl: '/register/register.html'
        }).state('login',{
            url: '/login',
            controller: 'LoginController',
            templateUrl: '/login/login.html'
        });
    };
})();