(function(){
'use strict';
angular.module('DIApp', [])
.controller('DIController', DIcontroller);

function DIcontroller($scope, $filter,){
  $scope.name = "John Wick";
  
  $scope.upper = function(){
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}
})();