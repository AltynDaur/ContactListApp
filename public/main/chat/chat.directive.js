(function(){
    angular.module('chat').directive('chat',chatDirective);

    function chatDirective(){
      return {
          restrict: 'E',
          controller: 'chatController',
          controllerAs: 'vm',
          templateUrl: '/main/chat/chat.html'
      };
    };
})();