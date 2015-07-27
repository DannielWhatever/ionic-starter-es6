
export default angular
.module('starter')
.run( ($ionicPlatform, $rootScope, FB_APP_ID) => {

  $ionicPlatform.ready( () => {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      window.StatusBar.styleLightContent(); //or try with StatusBar.styleLightContent()
    }
  });

  //fb init async
   window.fbAsyncInit = function () {
       FB.init({
           appId:FB_APP_ID,
           status:true,
           cookie:true,
           xfbml:true
       });
       FB.Event.subscribe('auth.statusChange', (response)=>{
           $rootScope.$broadcast('fb_statusChange', {'status': response.status});
       });
   };

   ((d)=>{
       var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
       if (d.getElementById(id)) {
           return;
       }
       js = d.createElement('script');
       js.id = id;
       js.async = true;
       js.src = "//connect.facebook.net/en_US/all.js";
       ref.parentNode.insertBefore(js, ref);
   })(document);

});
