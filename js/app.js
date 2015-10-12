var app = angular.module('person-project', ['ui.router', 'ngCookies', 'angularModalService', 'formly', 'formlyBootstrap', 'angularUtils.directives.dirPagination']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/partials/welcome/home.html',
      controller: 'UsersController'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '/partials/registrations/new.html',
      controller: 'UsersController'
    })
    .state('user', {
      url: '/users/:id',
      templateUrl: '/partials/users/dashboard.html',
      controller: 'UsersController'
    })
    .state('user.demographics', {
      url: '/demographics/new',
      templateUrl: '/partials/demographics/new.html',
      controller: 'UsersController'
    })
    .state('user.surveys', {
      url: '/surveys',
      templateUrl: '/partials/surveys/_user.html',
      controller: 'SurveysController'
    })
    .state('user.survey', {
      url: '/surveys/:survey_id',
      controller: 'SurveyController',
      views: {
        '' : {
          templateUrl: '/partials/surveys/_survey.html',
          controller: 'SurveyController'
        },
        'surveyItems@user.survey' : {
          templateUrl: 'partials/survey_items/survey_item.html',
          controller: 'SurveyItemController as vm'}
      }
    })
    .state('user.results', {
      url: '/results/:score',
      templateUrl: 'partials/users/results.html',
      controller: 'SurveyItemController',
    })
    .state('admin', {
      url: '/admin/:id',
      templateUrl: '/partials/admin/dashboard.html',
      controller: 'AdminController'
    })
    .state('admin/new', {
      url: '/admin/new',
      templateUrl: '/partials/admin/new.html',
      controller: 'UsersController'
    })
    .state('admin.surveys', {
      url: '/surveys',
      templateUrl: 'partials/surveys/_admin.html',
      controller: 'SurveysController'
    })
    .state('admin.new_survey', {
      url: '/surveys/new',
      templateUrl: '/partials/surveys/new',
      controller: 'SurveyController as vm'
    })
    .state('admin.survey', {
      url: '/surveys/:survey_id',
      templateUrl: '/partials/surveys/_survey.html',
      controller: 'SurveyController'
    })
    .state('admin.users', {
      url: '/users',
      templateUrl: '/partials/users/index.html',
      controller: 'UsersController'
    })
    .state('admin.user', {
      url: '/users/:user_id',
      templateUrl: '/partials/admin/show_user.html',
      controller: 'UsersController'
    })
    .state('terms', {
      url: '/terms',
      templateUrl: '/partials/welcome/terms.html',
      controller: 'UsersController'
    })
})
