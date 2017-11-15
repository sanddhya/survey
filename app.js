var surveyApp = angular.module('surveyApp', ['ng', 'ngRoute', 'ui.router']);

surveyApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('startSurvey', {
                url: '/startSurvey',
                templateUrl: 'app/solutions/views/startSurvey.html',
                controller: 'startSurveyController'
            })
            .state('survey', {
                url: '/survey',
                templateUrl: 'app/solutions/views/survey.html',
                controller: 'surveyController'
            })
            .state('completeSurvey', {
                url: '/completeSurvey',
                templateUrl: 'app/solutions/views/completeSurvey.html',
                controller: 'completeSurveyController'
            })

        $urlRouterProvider.otherwise('/startSurvey');
    }])
;

