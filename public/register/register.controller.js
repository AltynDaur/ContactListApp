(function(){
    angular.module('register').controller('registerController', registerController);

    function registerController(Users,$state){
        var vm = this;

        vm.register = register;
        vm.registerPerson = {};

        function register(){
            if(vm.registerPerson.password === vm.registerPerson.repeatPassword){
                delete vm.registerPerson.repeatPassword;
                Users.register(vm.registerPerson,function(response){
                    $state.go('login')
                });
            } else {
              alert('Password not equal!');
            };

        };
    };
})();