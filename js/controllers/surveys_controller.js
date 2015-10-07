app.controller('SurveysController', function ($scope, SamplesService, $state, SurveysService, ModalService, $location) {
  SurveysService.all().then(function (response) {
    $scope.surveys = response;
  })

  $scope.newSurvey = function () {
    $state.go('admin.new_survey');
  }
})
