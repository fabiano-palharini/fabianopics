angular.module('fabianopics').controller('PictureController', function($scope){
  $scope.picture = {};
  $scope.submit = function(){
    console.log($scope.picture);
  };
})
