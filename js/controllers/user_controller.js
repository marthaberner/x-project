app.controller('UserController', function ($scope, UsersService, $location, $cookies, SessionService) {

  $scope.signup = function() {
    UsersService.create($scope.newUser).then(function(response) {
      if (response.error) {
        $scope.errors = response.error;
        $scope.newUser = {};
        $location.path('/signup');
      } else {
        SessionService.set(response.id);
        $location.path('/users/' + response.id);
      }
    });
  }

  $scope.logout = function () {
    $cookies.remove('session_id');
    SessionService.currentUser = null;
    $location.path("/");
  }

  $scope.signin = function () {
    UsersService.signin($scope.user).then(function (response) {
      if(response.error){
        $scope.user.password = "";
        $scope.errors = response.error;
      } else {
        SessionService.set(response.id);
        $scope.user = {};
        if(response.admin){
          $location.path('/admin/dashboard/' + response.id);
        } else {
          $location.path('/users/' + response.id);
        }
      }
    });
  }

  $scope.newAdmin = function () {
    UsersService.createAdmin($scope.admin).then(function (response) {
      if(response.error){
        $scope.admin = {};
        $scope.errors = response.error;
      } else {
        $scope.admin = {};
        $location.path('/')
      }
    })
  }
})
