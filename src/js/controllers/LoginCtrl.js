
export default angular
.module('starter.controllers')
.controller('LoginCtrl', ($scope, $rootScope, $state, $local, UsersServ, FacebookServ, FB_CONNECTED) => {

  console.log('In login controller');

  //FIXME: Login with Fb
  /*
  Read about Login with Fb and Fix It
  https://github.com/Terumi/AngularJS-Facebook-Login/blob/master/js/ctrl.js

  */

  $scope.fbUser = {};
  $rootScope.$on('fb_statusChange', (e, args) => {
      console.log('FB Status: '+args.status);
      if(args.status===FB_CONNECTED){//if its connected
        FacebookServ.getUserInfo(); //get user
        $rootScope.$watch('fbUser',(fbUser) => { //when it's ready
          $scope.fbUser = fbUser;
          //Login in the App with fb
          /*let user = UsersServ.loginFacebook($scope.fbUser);
          console.log(user);
          if(user){
            $local.set('user',user);
            $state.go('tab.account');
          }*/
        });
      }
  });


  $scope.skip = () => {
    $state.go('tab.account');
  };

});
