'use strict';

require('./controllers');

angular.module('app', [
  'app.controllers'
], function ($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});
