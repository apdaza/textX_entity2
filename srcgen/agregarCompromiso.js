'use strict';

/**
 * @ngdoc function
 * @name nameApp.controller:AgregarCompromisoCtrl
 * @description
 * # AgregarCompromisoCtrl
 * Controller of the nameApp
 */
angular.module('nameApp')
  .controller('AgregarCompromisoCtrl', function ($scope, $http) {
    $scope.title = 'Compromiso';
    $scope.message = 'Agregar Compromiso';

      $http.get(api_path + 'persona?limit=0')
      .then(function(response) {
        $scope.persona = response.data;
      });
      $http.get(api_path + 'descripcion?limit=0')
      .then(function(response) {
        $scope.descripcion = response.data;
      });

    $scope.add = function(){
      if($scope.Compromiso.persona == null){
        return;
      }
      if($scope.Compromiso.descripcion == null){
        return;
      }
    var data = {
        persona: $scope.Compromiso.persona,
        descripcion: $scope.Compromiso.descripcion,
    };
    $http.post(api_path + 'Compromiso',data);
    window.location.href = '#/Compromiso';
  };

  $scope.cancel = function(){
    window.location.href = '#/Compromiso';
  };
  });