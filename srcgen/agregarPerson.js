'use strict';

/**
 * @ngdoc function
 * @name nameApp.controller:AgregarPersonCtrl
 * @description
 * # AgregarPersonCtrl
 * Controller of the nameApp
 */
angular.module('nameApp')
  .controller('AgregarPersonCtrl', function ($scope, $http) {
    $scope.title = 'Person';
    $scope.message = 'Agregar Person';

      $http.get(api_path + 'name?limit=0')
      .then(function(response) {
        $scope.name = response.data;
      });
      $http.get(api_path + 'address?limit=0')
      .then(function(response) {
        $scope.address = response.data;
      });
      $http.get(api_path + 'age?limit=0')
      .then(function(response) {
        $scope.age = response.data;
      });

    $scope.add = function(){
      if($scope.Person.name == null){
        return;
      }
      if($scope.Person.address == null){
        return;
      }
      if($scope.Person.age == null){
        return;
      }
    var data = {
        name: $scope.Person.name,
        address: $scope.Person.address,
        age: $scope.Person.age,
    };
    $http.post(api_path + 'Person',data);
    window.location.href = '#/Person';
  };

  $scope.cancel = function(){
    window.location.href = '#/Person';
  };
  });