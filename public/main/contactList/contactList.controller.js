(function(){
    angular.module('contactList').controller('contactListController',contactListController);

    function contactListController(Users){
        var vm = this;
        vm.showChat = showChat;

        function showChat(id){

        };

        function refresh(){
           vm.contacts = Users.query();
        };

        refresh();
        console.log(vm.contacts);
    };
})();