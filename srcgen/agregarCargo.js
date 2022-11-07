'use strict';

/**
 * @ngdoc function
 * @name nameApp.controller:AgregarCargoCtrl
 * @description
 * # AgregarCargoCtrl
 * Controller of the nameApp
 */
angular.module('nameApp')
  .controller('AgregarCargoCtrl', function ($scope, $http) {
    $scope.title = 'Cargo';
    $scope.message = 'Agregar Cargo';

      $http.get(api_path + 'empresa?limit=0')
      .then(function(response) {
        $scope.empresa = response.data;
      });
      $http.get(api_path + 'jefe?limit=0')
      .then(function(response) {
        $scope.jefe = response.data;
      });
      $http.get(api_path + 'salario?limit=0')
      .then(function(response) {
        $scope.salario = response.data;
      });

    $scope.add = function(){
      if($scope.Cargo.empresa == null){
        return;
      }
      if($scope.Cargo.jefe == null){
        return;
      }
      if($scope.Cargo.salario == null){
        return;
      }
    var data = {
        empresa: $scope.Cargo.empresa,
        jefe: $scope.Cargo.jefe,
        salario: $scope.Cargo.salario,
    };
    $http.post(api_path + 'Cargo',data);
    window.location.href = '#/Cargo';
  };

  $scope.cancel = function(){
    window.location.href = '#/Cargo';
  };
  });