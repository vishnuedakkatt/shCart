'use strict';
angular.module('cartlist', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/cartlist', {
            templateUrl: 'public/cartlist/cartlist.html',
            //controller: 'CartlistCtrl'
        });
    }])
    .controller('CartlistCtrl', ['$scope',function($scope){

        // Cart Items global array passed to view
        $scope.arrCartData = arrGblCartItems;


        // Calculating Total Amount
        $scope.getTotal = function(){
            var dblTotal = 0;
            angular.forEach($scope.arrCartData,function(objData){
                dblTotal += (parseFloat(objData.price * parseInt(objData.count)));
            });
            return dblTotal;
        };


        // Remove item from the cart
        $scope.removeItem = function(id){
            $scope.arrCartData.splice($scope.arrCartData.findIndex(obj => obj.sku == id),1);
        };
    }]);