app.controller('SurveysController', function ($scope, SamplesService, $state, SurveysService, ModalService, $location, SessionService) {

  SurveysService.all().then(function (response) {
    $scope.surveys = response;
  })
  $scope.loggedInUser = SessionService;
  $scope.newSurvey = function () {
    $state.go('admin.new_survey');
  }
})
