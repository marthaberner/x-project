app.controller('SurveysController', function ($scope, SamplesService, SurveysService, ModalService, $location) {
  SurveysService.all().then(function (response) {
    $scope.surveys = response;
  })

  $scope.newSurvey = function () {
    $location.path('admin/48/surveys/new');
  }
})
