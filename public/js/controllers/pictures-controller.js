angular.module('fabianopics').controller('PicturesController', function($scope, resourcePictures){
  $scope.pictures = [];
  $scope.filter = '';
  $scope.message = '';

  //var resourcePictures = $resource('v1/fotos/:pictureId'); code moved to myServices

  resourcePictures.query(function(pictures) {
    $scope.pictures = pictures;
  }, function(error){
    onsole.log(error_message);
  });


  /* refactor - replaced with code above
  $http.get('/v1/fotos').success(function(data){
    console.log(data);
    $scope.pictures = data;
  }).error(function(error_message) {
    console.log(error_message);
  });
  */

  $scope.remove = function(picture){
    resourcePictures.delete({pictureId : picture._id}, function(){
      var index = $scope.pictures.indexOf(picture);
      $scope.pictures.splice(index, 1);
      $scope.message = 'Picture ' + picture.titulo + ' removed with success.'
    }, function(){
      console.log('Error ' + error);
    });


    /* refactor - replaced with code above
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
    */
  }

});
