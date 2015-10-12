app.controller('SurveyItemController', function ($scope, $state, $location, SurveyItemsService, $stateParams) {
  $scope.answers = [];
  $scope.score = $stateParams.score;
  SurveyItemsService.find($stateParams.survey_id).then(function (response) {
    $scope.surveyItem = response;
    $scope.surveyOptions = response.options;
    $scope.subQuestions = response.sub_questions;
  })

  $scope.submitSurvey = function () {
    $scope.score = SurveyItemsService.getScore($scope.answers);
    var path = 'users/' + $stateParams.id + '/results/' + $scope.score
    $location.path(path);
  }
})
