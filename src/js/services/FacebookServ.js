/**

Api explorer: Example with albums
https://developers.facebook.com/tools/explorer/958581374204753/?method=GET&path=me%3Ffields%3Dphotos%7Balbum%7D

**/
export default angular
.module('starter.services')
.factory('FacebookServ', ($rootScope, $facebook) => {

  let _self = this;

  let _user = {};



  function getUserInfo(){
    FB.api('/me?fields=id,name,picture{url},email',(res)=>{
      console.log('getUserInfo Response',res);
      $rootScope.$apply(()=>{
        $rootScope.fbUser = _user = res;
      });
    });
  }

  function logout(){
    FB.logout((res)=>{
      $rootScope.$apply(()=>{
        $rootScope.fbUser = _user = {};
      });
    });
  }


  return { //using mirror
    getUserInfo,
    logout
  };

});
