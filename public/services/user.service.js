(function(){
    angular.module('userService',['ngResource']).factory('Users',usersFactory);

    function usersFactory($resource){
        return $resource('/:action',{},{
            register:{method:'POST',params:{action:'register'}},
            login:{method:'POST',params:{action: 'login'}}
        });
    };
})();