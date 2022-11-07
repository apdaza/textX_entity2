'use strict';

/**
 * @ngdoc function
 * @name nameApp.controller:AgregarTelefonoCtrl
 * @description
 * # AgregarTelefonoCtrl
 * Controller of the nameApp
 */
angular.module('nameApp')
  .controller('AgregarTelefonoCtrl', function ($scope, $http) {
    $scope.title = 'Telefono';
    $scope.message = 'Agregar Telefono';

      $http.get(api_path + 'indicador?limit=0')
      .then(function(response) {
        $scope.indicador = response.data;
      });
      $http.get(api_path + 'numero?limit=0')
      .then(function(response) {
        $scope.numero = response.data;
      });

    $scope.add = function(){
      if($scope.Telefono.indicador == null){
        return;
      }
      if($scope.Telefono.numero == null){
        return;
      }
    var data = {
        indicador: $scope.Telefono.indicador,
        numero: $scope.Telefono.numero,
    };
    $http.post(api_path + 'Telefono',data);
    window.location.href = '#/Telefono';
  };

  $scope.cancel = function(){
    window.location.href = '#/Telefono';
  };
  });