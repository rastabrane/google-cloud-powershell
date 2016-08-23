﻿var app = angular.module('powershellSite');

/** The controller that exposes route parameters to the templates. **/
app.controller('ReferenceController', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.res.then(function (ret) {
            var prodInfo = $scope.productInfo;
            if (prodInfo === undefined) {
            return;
        }
        
        /** We have to make sure no invalid routes were passed in **/
        if (Object.keys($routeParams).length === 2) {
            if (!($routeParams.product in prodInfo)
                || !($routeParams.cmdlet in prodInfo[$routeParams.product])) {
                    console.error("Invalid Product or Cmdlet");
                    document.getElementById('reference').innerHTML = 
                        '<strong>Invalid Product or Cmdlet</strong>';
                    return;
            }
        }
        else if (Object.keys($routeParams).length === 1) {
            if (!($routeParams.product in $scope.productInfo)) {
                console.error("Invalid Product");
                document.getElementById('reference').innerHTML = 
                    '<strong>Invalid Product</strong>';
                return;
            }
        }
        });
        
        this.params = $routeParams;
}]);
