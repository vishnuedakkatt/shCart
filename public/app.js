'use strict';
var arrGblCartItems = [];


angular.module('shCart', [
    'ngRoute',
    'product',
    'cartlist'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/product'
    });
}]);
