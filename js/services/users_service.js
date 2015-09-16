app.factory('UsersService', function($http, $cookies) {
  var users;
  return {
    create: function(attrs) {
      return $http.post('https://person-project.herokuapp.com/api/signup', attrs).then(function (response) {
        return response.data;
      });
    },
    all: function () {
      return $http.get('http://localhost:3000/api/users').then(function (response) {
       return response.data
      })
    },
    signin: function (user) {
      return $http.post('https://person-project.herokuapp.com/api/signin', user ).then(function (response) {
        return response.data;
      });
    },
    createAdmin: function (admin) {
      return $http.post('https://person-project.herokuapp.com/api/admin/new', admin).then(function (response) {
        return response.data;
      });
    },
    find: function(user){
      return $http.get('http://localhost:3000/api/users/' + user.id).then(function (response) {
        return response
      })
    },

    destroy: function (user) {
      return $http.delete('http://localhost:3000/api/users/' + user).then(function (response) {
        return response.status === 200 ? true : false;
      })
    }
  }
})
