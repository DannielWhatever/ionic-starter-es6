/**
 * Angular App declaration & dependencies
 */
require('ng-facebook');
require('angular-carousel/dist/angular-carousel.js');
require('angular-touch');

const dependencies = [
  'ionic',
  'starter.controllers',
  'starter.services',
  'ngFacebook',
  'ngTouch',
  'angular-carousel'
];

angular.module('starter', dependencies);

/**
 * require App files
 */
require('./app.constants.js');
require('./app.config.js');
require('./app.run.js');
require('./controllers');
require('./services');
