app.controller('SurveyController', function ($scope, $stateParams, $location, SurveysService) {
  $scope.someSurvey = "Some Survey"

  $scope.createSurvey = function () {
    SurveysService.insert(vm.survey)
    $location.path('admin/48/surveys')
  }

  var vm = this;
  vm.survey = {};

  vm.surveyFields = [
    {
      key: 'title',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Title',
        placeholder: 'Survey title',
        required: true
      }
    },
    {
      key: 'description',
      type: 'input',
      templateOptions: {
        type: 'textArea',
        label: 'Description',
        placeholder: 'Description',
        required: true
      }
    },
    {
      key: 'version',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Version',
        placeholder: 'Survey Version',
        required: true
      }
    },
    {
      key: 'estimated_time_to_complete',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Estimated Time to Complete',
        placeholder: 'Estimated Time to Complete',
        required: true
      }
    },
    {
      key: 'status',
      type: 'select',
      templateOptions: {
        label: 'Status',
        options: [
          {
            "name":"In Design",
            "value":"in_design",
          },
          {
            "name":"Published",
            "value":"published"
          },
          {
            "name":"Retired",
            "value":"retired"
          }
        ],
        required: true
      }
    }
  ];
})
