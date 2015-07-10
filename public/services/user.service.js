(function(){
    angular.module('userService',['ngResource']).factory('Users',usersFactory);

    function usersFactory($resource){
        return $resource('/users/:action/:id',{},{
            register:{method:'POST',params:{action:'register'}},
            login:{method:'POST',params:{action: 'login'}},
            query:{method:'GET',isArray:true },
            startChat:{method: 'GET', params:{action:'startChat',id:'@id'}}

        });
    };
})();