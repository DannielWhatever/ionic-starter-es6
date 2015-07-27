
export default angular
.module('starter.services')
.factory('$local', ($window) => {

  return {

//try reflection for work with strings

    set: (key, value) => {
      $window.localStorage[key] = JSON.stringify(value);
    },

    get: (key) => {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  };

});
