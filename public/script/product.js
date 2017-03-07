/**
 * Created by vishnu on 6/3/17.
 */
'use strict';
angular.module('product', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/product', {
            templateUrl: 'public/product/product.html'
        });
    }])
    .controller('ProductCtrl', ['$scope','$http',function($scope,$http) {

        var objAllProducts = [];
        // Reading a JSON file and taking data from it
        $http.get('public/db.json').then(function(response){
            objAllProducts = response.data;
            // By Default Mobile loading mobile details
            $scope.objProducts = objAllProducts[0].mobile;
            $scope.menu = "Mobile";
        });


        // Menu Click Function
        $scope.menuClick = function(menu) {
            // Here only 2 menus, so statically declared
            // Using foreach, we can dynamically add more menus and can reduce code
            if(menu == "mobile"){
                $scope.objProducts = objAllProducts[0].mobile;
                $scope.menu = "Mobile";
                $("#liMobile").addClass('active');
                $("#liComputer").removeClass('active');
            }else if(menu == "computer"){
                $scope.objProducts = objAllProducts[1].computer;
                $scope.menu = "Computer";
                $("#liComputer").addClass('active');
                $("#liMobile").removeClass('active');
            }


        };

        // Adding Items to Cart
        $scope.addToCart = function(objProduct) {
            var arrResult = arrGblCartItems.filter(function(obj) {
                if(obj.sku == objProduct.sku){
                    obj.count += 1;
                }
                return obj.sku == objProduct.sku;
            });
            if(arrResult.length === 0){
                objProduct.count = 1;
                arrGblCartItems.push(objProduct);
            }
        };

    }]);