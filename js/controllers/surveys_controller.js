app.controller('SurveysController', function ($scope, SamplesService, ModalService, $location) {
  $scope.surveys = SamplesService;

  $scope.showConsentModal = function(survey_id) {
    ModalService.showModal({
      templateUrl: "/partials/users/consent.html",
      controller: "ConsentController"
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(result) {
      });
    });
  }

  $scope.newSurvey = function () {
    $location.path('admin/48/surveys/new');
  }
})
