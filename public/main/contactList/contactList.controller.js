(function(){
    angular.module('contactList').controller('contactListController',contactListController);

    function contactListController(Users,$scope){
        var vm = this;
        vm.startChat = startChat;
        vm.contacts = [];

        function startChat(id){
            Users.startChat({id:id},function(response){
                $scope.$parent.chat = response;
            });

        };

        function refresh(){
            vm.contacts = Users.query();
        };

        refresh();
        console.log(vm.contacts);
    };
})();