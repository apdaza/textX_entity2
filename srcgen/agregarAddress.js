'use strict';

/**
 * @ngdoc function
 * @name nameApp.controller:AgregarAddressCtrl
 * @description
 * # AgregarAddressCtrl
 * Controller of the nameApp
 */
angular.module('nameApp')
  .controller('AgregarAddressCtrl', function ($scope, $http) {
    $scope.title = 'Address';
    $scope.message = 'Agregar Address';

      $http.get(api_path + 'street?limit=0')
      .then(function(response) {
        $scope.street = response.data;
      });
      $http.get(api_path + 'city?limit=0')
      .then(function(response) {
        $scope.city = response.data;
      });
      $http.get(api_path + 'country?limit=0')
      .then(function(response) {
        $scope.country = response.data;
      });

    $scope.add = function(){
      if($scope.Address.street == null){
        return;
      }
      if($scope.Address.city == null){
        return;
      }
      if($scope.Address.country == null){
        return;
      }
    var data = {
        street: $scope.Address.street,
        city: $scope.Address.city,
        country: $scope.Address.country,
    };
    $http.post(api_path + 'Address',data);
    window.location.href = '#/Address';
  };

  $scope.cancel = function(){
    window.location.href = '#/Address';
  };
  });