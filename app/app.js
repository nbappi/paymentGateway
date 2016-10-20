'use strict';

var gatewayApp = angular.module('gatewayApp', [
    'ngRoute'
]);

gatewayApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            controller : "PaymentGatewayController",
            templateUrl : "modules/PaymentGateway/PaymentGatewayController.html"
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
