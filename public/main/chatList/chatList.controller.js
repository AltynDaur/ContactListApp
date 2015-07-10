(function(){
    angular.module('chatList').controller('chatListController',chatListController);

    function chatListController(Chats){

        var vm = this;
        vm.search = search;

        function search(){
            console.log('search here!');
        };

        function refresh(){
            vm.chats = Chats.query();
        };

    };
})();