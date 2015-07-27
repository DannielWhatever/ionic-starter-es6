
export default angular
.module('starter.controllers')
.controller('AccountCtrl', ($scope) => {

  console.log('AccountCtrl');

  $scope.settings = {
    enableFriends: true
  };

});
