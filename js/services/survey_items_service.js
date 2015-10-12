app.factory('SurveyItemsService', function ($http) {
  return {
    find: function(id){
      return $http.get('https://person-project.herokuapp.com/api/v1/survey-items/' + id)
      .then(function (response) {
        return response.data;
      })
    },
    getScore: function (results) {
      var answers = results.map(function (num) {
        return Number(num);
      })
      return answers.reduce(function (sum, num) {
        return sum + num;
      })
    }
  }
})
