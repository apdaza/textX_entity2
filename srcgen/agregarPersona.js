'use strict';

/**
 * @ngdoc function
 * @name nameApp.controller:AgregarPersonaCtrl
 * @description
 * # AgregarPersonaCtrl
 * Controller of the nameApp
 */
angular.module('nameApp')
  .controller('AgregarPersonaCtrl', function ($scope, $http) {
    $scope.title = 'Persona';
    $scope.message = 'Agregar Persona';

      $http.get(api_path + 'nombre?limit=0')
      .then(function(response) {
        $scope.nombre = response.data;
      });
      $http.get(api_path + 'apellido?limit=0')
      .then(function(response) {
        $scope.apellido = response.data;
      });
      $http.get(api_path + 'direccion?limit=0')
      .then(function(response) {
        $scope.direccion = response.data;
      });
      $http.get(api_path + 'edad?limit=0')
      .then(function(response) {
        $scope.edad = response.data;
      });
      $http.get(api_path + 'telefono?limit=0')
      .then(function(response) {
        $scope.telefono = response.data;
      });
      $http.get(api_path + 'correo?limit=0')
      .then(function(response) {
        $scope.correo = response.data;
      });

    $scope.add = function(){
      if($scope.Persona.nombre == null){
        return;
      }
      if($scope.Persona.apellido == null){
        return;
      }
      if($scope.Persona.direccion == null){
        return;
      }
      if($scope.Persona.edad == null){
        return;
      }
      if($scope.Persona.telefono == null){
        return;
      }
      if($scope.Persona.correo == null){
        return;
      }
    var data = {
        nombre: $scope.Persona.nombre,
        apellido: $scope.Persona.apellido,
        direccion: $scope.Persona.direccion,
        edad: $scope.Persona.edad,
        telefono: $scope.Persona.telefono,
        correo: $scope.Persona.correo,
    };
    $http.post(api_path + 'Persona',data);
    window.location.href = '#/Persona';
  };

  $scope.cancel = function(){
    window.location.href = '#/Persona';
  };
  });