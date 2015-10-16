app.factory('SurveyItemsService', function ($http) {
  var url = 'https://person-project.herokuapp.com/api/v1';
  return {
    find: function(id){
      return $http.get(url + '/survey-items/' + id)
      .then(function (response) {
        return response.data;
      })
    },
    getScore: function (results) {
      var answers = results.map(function (num) {
        return Number(num);
      })
      answers = answers.filter(function (answer) {
        var nan = isNaN(answer);
        return !nan;
      })
      return answers.reduce(function (sum, num) {
        return sum + num;
      })
    }
  }
})
