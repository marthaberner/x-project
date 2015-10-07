app.factory('SurveysService', function ($http) {
  return {
    all: function () {
      return $http.get('https://person-project.herokuapp.com/api/v1/surveys').then(function (response) {
        return response.data;
      });
    },

    create: function (survey) {
      return $http.post('https://person-project.herokuapp.com/api/v1/surveys', survey).then(function (response) {
        return response.data;
      });
    },

    find: function (survey_id) {
      return $http.get('https://person-project.herokuapp.com/api/v1/surveys/' + survey_id).then(function (response) {
        return response.data;
      })
    }
  }
})
