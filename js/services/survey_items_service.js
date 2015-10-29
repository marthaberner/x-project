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
      if(results.length === 0){
        return 0;
      } else {
        var _this = this;
        var answers = results.map(function (num) {
          if(typeof(num)==='object'){
            num = _this.getSubScore(num);
          }
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
    },
    getDependent: function (itemsArray, id) {
      var dependent;
      itemsArray.forEach(function (item, i) {
        if(item.id === id){ dependent = i };
      })
      return dependent;
    },
    getSubScore: function(answers) {
      if(answers.length === 0){
        return 0;
      } else {
        return answers.reduce(function (sum, num) {
          return sum + num;
        })
      }
    },
    sortItemsByPosition: function (items) {
      return items.sort(function (item1, item2) {
        return item1.position - item2.position;
      })
    }
  }
})
