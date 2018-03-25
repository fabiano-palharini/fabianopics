angular.module('fabianopics').controller('PictureController', function($scope, $http, $routeParams){
  $scope.picture = {};
  $scope.message = '';

  if($routeParams.pictureId){
    $http.get('v1/fotos/' + $routeParams.pictureId)
    .success(function(picture){
      $scope.picture = picture
    })
    .error(function(error){
      $scope.message = 'An error happened when retrieving the picture';
    })
  }

  $scope.submit = function(){
    if ($scope.form.$valid) {
      if ($scope.picture._id){
        $http.put('v1/fotos/'+ $scope.picture._id, $scope.picture)
        .success(function(){
          $scope.message = 'Picture edited successfully';
        })
        .error(function() {
          $scope.message = 'An error happened when editing the picture';
        });
      }else{
        $http.post('v1/fotos', $scope.picture)
        .success(function(){
          $scope.message = 'Picture saved successfully';
        })
        .error(function(){
          $scope.message = 'An error happened when saving the picture';
        });
      }
    }
  };
})
