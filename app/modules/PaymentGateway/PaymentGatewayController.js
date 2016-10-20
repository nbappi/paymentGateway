'use strict';

gatewayApp.controller('PaymentGatewayController', ['$scope', '$http',
    function($scope, $http)
    {

      $scope.addItem = function(){
         $http.get('http://localhost:3000').success(function(data) {
             console.log(data);
             document.getElementById("demo").innerHTML = data;
         });
      }
    }
]);
