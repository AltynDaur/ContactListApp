(function(){
    angular.module('chatService',['ngResource']).factory('Chats',chatsFactory);

    function chatsFactory($resource){
        return $resource('/chats/:id',{},{

        });
    };
})();