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
      controller: 'UsersController'
    })
    .state('users/:id', {
      url: '/users/:id',
      templateUrl: '/partials/user.html',
      controller: 'UsersController'
    })
    .state('admin/new', {
      url: '/admin/new',
      templateUrl: '/partials/admin/new.html',
      controller: 'UsersController'
    })
    .state('admin/dashboard/:id', {
      url: '/admin/dashboard/:id',
      templateUrl: '/partials/admin/dashboard.html',
      controller: 'AdminController'
    })
    .state('users/terms', {
      url: '/terms',
      templateUrl: '/partials/terms.html',
      controller: 'UsersController'
    })
    .state('users/:id/show', {
      url: '/users/:id/show',
      templateUrl: '/partials/show.html',
      controller: 'UsersController'
    })
})
