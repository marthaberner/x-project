app.factory('SurveysService', function ($http) {
  return {
    all: function () {
      return $http.get('http://localhost:3000/api/v1/surveys').then(function (response) {
        return response.data;
      });
    },

    create: function (survey) {
      return $http.post('http://localhost:3000/api/v1/surveys', survey).then(function (response) {
        return response.data;
      });
    }
  }
})
