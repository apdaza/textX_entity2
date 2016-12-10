'use strict';

/**
 * @ngdoc function
 * @name nameApp.controller:AgregarDireccionCtrl
 * @description
 * # AgregarDireccionCtrl
 * Controller of the nameApp
 */
angular.module('nameApp')
  .controller('AgregarDireccionCtrl', function ($scope, $http) {
    $scope.title = 'Direccion';
    $scope.message = 'Agregar Direccion';

      $http.get(api_path + 'calle?limit=0')
      .then(function(response) {
        $scope.calle = response.data;
      });
      $http.get(api_path + 'ciudad?limit=0')
      .then(function(response) {
        $scope.ciudad = response.data;
      });
      $http.get(api_path + 'pais?limit=0')
      .then(function(response) {
        $scope.pais = response.data;
      });

    $scope.add = function(){
      if($scope.Direccion.calle == null){
        return;
      }
      if($scope.Direccion.ciudad == null){
        return;
      }
      if($scope.Direccion.pais == null){
        return;
      }
    var data = {
        calle: $scope.Direccion.calle,
        ciudad: $scope.Direccion.ciudad,
        pais: $scope.Direccion.pais,
    };
    $http.post(api_path + 'Direccion',data);
    window.location.href = '#/Direccion';
  };

  $scope.cancel = function(){
    window.location.href = '#/Direccion';
  };
  });