angular.module('fabianopics').controller('PicturesController', function($scope, $http){
  $scope.pictures = [];
  $scope.filter = '';
  $scope.message = '';

  $http.get('/v1/fotos').success(function(data){
    console.log(data);
    $scope.pictures = data;
  }).error(function(error_message) {
    console.log(error_message);
  });

  $scope.remove = function(picture){
    console.log(picture);
    $http.delete('v1/fotos/' + picture._id)
    .success(function(){
      var index = $scope.pictures.indexOf(picture);
      $scope.pictures.splice(index, 1);
      $scope.message = 'Picture ' + picture.titulo + ' removed with success.';
    })
    .error(function(error){
      console.log('Error ' + error);
    })
  }

});
