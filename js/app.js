var app = angular.module('person-project', ['ui.router', 'ngCookies']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: '/partials/home.html'
    })
    .state('users', {
      url: '/users',
      templateUrl: '/partials/users.html',
      controller: 'UsersController'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '/partials/signup.html',
      controller: 'UserController'
    })
    .state('users/:id', {
      url: '/users/:id',
      templateUrl: '/partials/user.html',
      controller: 'UserController'
    })
})
