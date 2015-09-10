app.factory('UsersService', function($http, $cookies) {
  var users;
  return {
    create: function(attrs) {
      return $http.post('http://localhost:3000/api/signup', attrs).then(function (response) {
        return response.data;
      });
    },
    all: function () {
      return $http.get('http://localhost:3000/api/users').then(function (response) {
        users = response.data
        return users;
      })
    },
    signin: function (user) {
      return $http.post('http://localhost:3000/api/signin', user ).then(function (response) {
        return response.data;
      });
    },
    createAdmin: function (admin) {
      return $http.post('http://localhost:3000/api/admin/new', admin).then(function (response) {
        return response.data;
      });
    }
  }
})
