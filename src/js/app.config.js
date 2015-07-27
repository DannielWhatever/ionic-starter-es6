
export default angular
.module('starter')
.config( ($stateProvider, $urlRouterProvider, $facebookProvider, ASSETS_PATH, FB_APP_ID) => {

  $facebookProvider.setAppId(FB_APP_ID);

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  //Login
  .state('login', {
    url: '/login',
    templateUrl: ASSETS_PATH + '/login/login.html',
    controller: 'LoginCtrl'
  })

  // Tabs
  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: ASSETS_PATH + '/tabs.html'
  })

  //Settings
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: ASSETS_PATH + '/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
