(function(){
    angular.module('chatList').directive('chatList',chatListDirective);

    function chatListDirective(){
        return {
            restrict: 'E',
            controller: 'chatListController',
            controllerAs:'vm',
            scope:{
                search: '='
            },
            templateUrl: 'main/chatList/chatList.html',
            bindToController: true
        };
    };
})();