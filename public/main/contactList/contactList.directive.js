(function(){
    angular.module('contactList').directive('contactList',contactListDirective);

    function contactListDirective(){
        return {
            restrict: 'E',
            controller: 'contactListController',
            controllerAs: 'vm',
            templateUrl: 'main/contactList/contactList.html'
        };
    };
})();