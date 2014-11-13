'use strict';

function HomeCtrl ($scope) {
  $scope.countries = [
      {name: 'France', population: 63.1},
      {name: 'United Kingdom', population: 61.8}
  ];
}

angular.module('app.controllers', [])
  .controller('HomeCtrl', [ '$scope', HomeCtrl ]);
