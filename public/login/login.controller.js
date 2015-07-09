(function(){
    angular.module('login').controller('loginController',loginController);

    function loginController(Users,$state,store){
        var vm = this;

        vm.login = login;

        function login(){
            Users.login(vm.loginPerson,function(response){

                if(response.id_token){
                    store.set('jwt',response.id_token);
                    $state.go('main');
                }
            });
        };
    };
})();