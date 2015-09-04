app.controller('ApplicationController', function ($scope, $location, $cookies, UsersService) {
    $scope.loggedInUser = UsersService.currentUser();
});
