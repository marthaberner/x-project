app.controller('SurveyItemController', function ($scope, $state, $location, SurveyItemsService, $stateParams) {
  $scope.submitted=false;
  $scope.answers = [];
  $scope.totalQuestions;
  SurveyItemsService.find($stateParams.survey_id).then(function (response) {
    if(response.length > 1) {
      $scope.totalQuestions = response.length;
      $scope.surveyItems = SurveyItemsService.sortItemsByPosition(response);
      $scope.freeForm = true;
      response.forEach(function (item) {
        if(item.depends_on){
          item.dependentIndex = SurveyItemsService.getDependent(response, item.depends_on.id);
        }
      })
    } else {
      $scope.totalQuestions = response[0].sub_questions.length;
      $scope.surveyOptions = response[0].options;
      $scope.subQuestions = response[0].sub_questions;
      $scope.table = true;
    }
  })

  $scope.submitSurvey = function () {
    if($scope.answers.length < $scope.totalQuestions && !$scope.submitAnyway){
      $scope.submitted = true;
      $scope.submitAnyway = true;
    } else {
      $scope.submitAnyway = false;
      $scope.submitted = false;
      $scope.score = SurveyItemsService.getScore($scope.answers);
      var path = 'users/' + $stateParams.id + '/results/' + $scope.score
      $location.path(path);
    }
  }
})
