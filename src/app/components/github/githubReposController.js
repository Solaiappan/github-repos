var controllers = angular.module('controllers', []);

controllers.controller('githubReposController', ['$scope', 'httpService',
    function ($scope, $http) {
        $http.get('phones/phones.json').success(function(data) {
            $scope.phones = data;
        });

        $scope.orderProp = 'age';
    }]);