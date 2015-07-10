(function(){
    angular.module('contactList').directive('contactList',contactListDirective);

    function contactListDirective(){
        return {
            restrict: 'E',
            controller: 'contactListController',
            controllerAs: 'vm',
            scope:{
                contacts:'=',
                startChat:'='
            },
            templateUrl: 'main/contactList/contactList.html',
            bindToController: true
        };
    };
})();