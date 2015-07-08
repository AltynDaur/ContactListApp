(function(){
    angular.module('login').controller('loginController',loginController);

    function loginController(Users,$state){
        var vm = this;

        vm.login = login;

        function login(){
            Users.login(vm.loginPerson,function(response){
                $state.go('main');
            });
        };
    };
})();