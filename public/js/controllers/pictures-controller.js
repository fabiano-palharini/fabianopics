angular.module('fabianopics').controller('PicturesController', function($scope, $http){
  $scope.pictures = [];
  $scope.filter = '';

  $http.get('/v1/fotos').success(function(data){
    console.log(data);
    $scope.pictures = data;
  }).error(function(error_message) {
    console.log(error_message);
  });
});
