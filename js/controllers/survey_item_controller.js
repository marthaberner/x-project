app.controller('SurveyItemController', function ($scope, $state, $location, SurveyItemsService, $stateParams) {
  $scope.answers = [];
  $scope.score = $stateParams.score;
  SurveyItemsService.find($stateParams.survey_id).then(function (response) {
    if(response.length > 1) {
      response.forEach(function (item) {
        if(item.item_type === 'multiple_choice' && item.layout === 'table'){
          $scope.surveyOptions = item.options;
          $scope.subQuestions = item.sub_questions;
        } else {
          $scope.surveyItems = response;
          $scope.multiChoice = true;
        }
      })
    } else {
      $scope.surveyOptions = response[0].options;
      $scope.subQuestions = response[0].sub_questions;
      $scope.table = true;
    }
  })

  $scope.submitSurvey = function () {
    $scope.score = SurveyItemsService.getScore($scope.answers);
    var path = 'users/' + $stateParams.id + '/results/' + $scope.score
    $location.path(path);
  }
})
