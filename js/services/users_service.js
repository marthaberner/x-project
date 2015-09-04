app.factory('UsersService', function($http, $cookies) {
  var users;
  return {
    create: function(attrs) {
      return $http.post('https://person-project.herokuapp.com/api/signup', attrs).then(function (response) {
        return response.data;
      });
    },
    all: function () {
      return $http.get('https://person-project.herokuapp.com/api/users').then(function (response) {
        users = response.data
        return users;
      })
    },
    signin: function (user) {
      return $http.post('https://person-project.herokuapp.com/api/signin', user ).then(function (response) {
        return response.data;
      });
    },
    currentUser: function () {
      return $cookies.get('session_id');
    }
  }
})
