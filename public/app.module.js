(function(){
    angular.module('Textogram',['ui.router','angular-jwt','pascalprecht.translate','angular-storage','login','register','main'])
        .config(TextogramConfig).run(AppRun);

    function TextogramConfig($urlRouterProvider, $httpProvider, $stateProvider,$translateProvider,jwtInterceptorProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('register', {
            url: '/register',
            controller: 'registerController',
            controllerAs:'vm',
            templateUrl: '/register/register.html'
        }).state('login',{
            url: '/login',
            controller: 'loginController',
            controllerAs:'vm',
            templateUrl: '/login/login.html'
        }).state('start',{
            url: '/',
            templateUrl:'start.html'
        }).state('main',{
            url:'/main',
            templateUrl:'/main/main.html',
            data:{
                requiresLogin:true
            }
        });
        jwtInterceptorProvider.tokenGetter = function (store) {
            return store.get('jwt');
        };
        $httpProvider.interceptors.push('jwtInterceptor');

        $translateProvider.translations('en', {

            REGISTER: 'Register',
            LOGIN: 'Login',
            GREETING: 'Greetings, commander!',
            GREETINGALTER: 'Oh! Sorry, general ',
            NAME: 'Name',
            ENTERFN: 'Enter your name',
            EMAIL: 'E-mail',
            ENTEREMAIL: 'Enter your email',
            PASS: 'Password',
            CREATEPASS: 'Create your password',
            ENTERPASS: 'Enter your password',
            REPEATPASS: 'Repeat password',
            REPEATYPASS: 'Repeat your password',
            SIGNIN: 'Sign in',
            BACK: 'Oops, I think, I should go back!',
            AUTHOR: 'Altynbekov Dauren',
            AUTHORSCITY: 'Karaganda city',
            GITHUBLINK: 'Fork this project on GitHub',
            CHANGELANGUAGE: 'Change language'
        });
        $translateProvider.translations('ru', {

            REGISTER: '�����������',
            LOGIN:'����',
            GREETING: '�����������, ������ ������!',
            GREETINGALTER: '�����������, ������ ',
            NAME: '���',

            ENTERFN: '������� ���� ���',
            EMAIL: '�� �����',
            ENTEREMAIL: '������� ���� �� �����',
            PASS: '������',
            CREATEPASS: '�������� ���� ������',
            ENTERPASS: '������� ���� ������',
            REPEATPASS: '��������� ������',
            REPEATYPASS: '��������� ���� ������',
            SIGNIN: '�����',
            BACK: '��! ������� ��� ���� �����!',
            AUTHOR: '���������� ������',
            AUTHORSCITY: '�. ���������',
            GITHUBLINK: '����������� ���� ������ �� GitHub',
            CHANGELANGUAGE: '����� �����'

        });
        $translateProvider.preferredLanguage('en');
    };

    function AppRun($state,store,$rootScope){
        $rootScope.$on('$stateChangeStart',function(e,to){
            if(to.data && to.data.requiresLogin){
                if(!store.get('jwt')){
                    e.preventDefault();
                    $state.go('login');
                };
            }
        })
    };
})();