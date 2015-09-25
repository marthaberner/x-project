app.controller('SurveyController', function ($scope, $stateParams) {
  $scope.someSurvey = "Some Survey"

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
        type: 'text',
        label: 'Version',
        placeholder: 'Survey Version',
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
    },
    {
      key: 'question',
      type: 'select',
      templateOptions: {
        label: 'Type of question',
        options: [
          {
          "name":"Radio Button",
          "value":"radio"
        },
        {
          "name":"Text Input",
          "value":"text"
        },
        {
          "name":"Text Area Input",
          "value":"textArea"
        }
      ],
        required: true
      }
    }
  ];
})
