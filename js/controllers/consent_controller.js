app.controller('ConsentController', function ($scope, close, $location) {
  $scope.submitConsentForm = function (survey_id) {
    if($scope.consent){
      $location.path('/users/95/surveys/' + survey_id)
    }
  }

  $scope.dismissModal = function(result) {
    close(result, 200);
    $location.path('/')
 };
})
