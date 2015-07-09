(function(){
    angular.module('userService',['ngResource']).factory('Users',usersFactory);

    function usersFactory($resource){
        return $resource('/users/:action',{},{
            register:{method:'POST',params:{action:'register'}},
            login:{method:'POST',params:{action: 'login'}},
            query:{method:'GET',isArray:true }
        });
    };
})();