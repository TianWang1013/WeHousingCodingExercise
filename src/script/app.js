/**
 * Created by Tian on 12/20/16.
 */
var app = angular.module("searchResult", ['angularUtils.directives.dirPagination','ngDialog']);


app.controller('ListCtrl', function($http,$scope,ngDialog) {
    $http.get('src/data/apartment.json').success(function(response) {
        $scope.products = response.apartments;
    });

    $scope.sort = function(key){
        $scope.sortKey = key;   //set the sortKey to the param passed
        $scope.reverse = true; //sorted descendingly
    };

    $scope.open = function () {
        ngDialog.open({
            template: 'firstDialog',
            controller: 'FirstDialogCtrl',
            className: 'ngdialog-theme-default ngdialog-theme-custom'
        });
    };
});


app.controller('FirstDialogCtrl', function ($scope, ngDialog) {
    $scope.next = function () {
        ngDialog.close('ngdialog1');
    };
});

