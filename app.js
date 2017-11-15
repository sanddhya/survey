var pbSmbApp = angular.module('pbSmbApp', ['ng', 'ngRoute', 'ui.router']);

pbSmbApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/solutions/views/homePage.html',
                controller: 'homePageController'
            })
            .state('eCommerce', {
                url: '/eCommerce',
                templateUrl: 'app/solutions/views/eCommerce.html',
                controller: 'eCommerceController'
            })
            .state('legalServices', {
                url: '/legalServices',
                templateUrl: 'app/solutions/views/legalServices.html',
                controller: 'legalServicesController'
            })
            .state('medicalProfessional', {
                url: '/medicalProfessional',
                templateUrl: 'app/solutions/views/medicalProfessional.html',
                controller: 'medicalProController'
            })
            .state('otherProfessional', {
                url: '/otherProfessional',
                templateUrl: 'app/solutions/views/otherProfessional.html',
                controller: 'otherProController'
            })
            .state('smallBusiness', {
                url: '/smallBusiness',
                templateUrl: 'app/solutions/views/smallBusinessRetailer.html',
                controller: 'smallBusinessController'
            });

        $urlRouterProvider.otherwise('/home');
    }])
;

