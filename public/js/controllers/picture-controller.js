angular.module('fabianopics').controller('PictureController', function($scope, picturesRegistration, resourcePictures, $routeParams){
  $scope.picture = {};
  $scope.message = '';

  /* code relocated to myServices
    var resourcePictures = $resource('v1/fotos/:pictureId', null, {
    update: {
      method: 'PUT'
    }
  });*/

  if($routeParams.pictureId){
    resourcePictures.get({pictureId: $routeParams.pictureId}, function(picture){
      $scope.picture = picture
    }, function(error){
      $scope.message = 'An error happened when retrieving the picture';
    })
    /* refactor - replaced with code above
    $http.get('v1/fotos/' + $routeParams.pictureId)
    .success(function(picture){
      $scope.picture = picture
    })
    .error(function(error){
      $scope.message = 'An error happened when retrieving the picture';
    })
    */
  }

  $scope.submit = function(){
    if ($scope.form.$valid) {
      picturesRegistration.save($scope.picture)
      .then(function(data){
        $scope.message = data.message;
        if(data.insert) $scope.picture = {};
        //$scope.focused = true;        
      })
      .catch(function(data){
        $scope.message = data.message;
      })
//      if ($scope.picture._id){
//        resourcePictures.update({pictureId: $scope.picture._id}, $scope.picture, function(){
//          $scope.message = 'Picture edited successfully';
//        }, function(error){
//          $scope.message = 'An error happened when editing the picture';
//        })


        /* refactor - replaced with code above
        $http.put('v1/fotos/'+ $scope.picture._id, $scope.picture)
        .success(function(){
          $scope.message = 'Picture edited successfully';
        })
        .error(function() {
          $scope.message = 'An error happened when editing the picture';
        });
        */
//      }else{
//        resourcePictures.save($scope.picture, function(){
//          $scope.picture = {};
//          $scope.message = 'Picture saved successfully';
//        }, function(error){
//          $scope.message = 'An error happened when saving the picture';
//        })
        /* refactor - replaced with code above
        $http.post('v1/fotos', $scope.picture)
        .success(function(){
          $scope.message = 'Picture saved successfully';
        })
        .error(function(){
          $scope.message = 'An error happened when saving the picture';
        });
        */
//      }
    }
  };
})
