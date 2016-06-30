
angular.
module('phonecatApp').
  config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    // Now set up the states
    $urlRouterProvider.otherwise('/about');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ====================================
    //   .state('home', {
    //   url: '/home',
    //   templateUrl: 'templates/partial-home.html'
    // })

    .state('about', {
        url: '/about',
        views: {

            // the main template will be placed here (relatively named)
            '': { templateUrl: 'templates/partial-about.html' },

            // the child views will be defined here (absolutely named)
            'filter@about': { template: '<phone-list> </phone-list>' },

            // for column two, we'll define a separate controller
            'list@about': {
                template: '<phone-discp></phone-discp>'

            }
        }

    });

  }]);
