angular.module('myServices', ['ngResource'])
.factory('resourcePictures', function($resource){

  return $resource('v1/fotos/:pictureId', null, {
    update: {
      method: 'PUT'
    }
  });

})
.factory('picturesRegistration', function(resourcePictures, $q){
  var service = {};

  service.save = function(picture){
    return $q(function(resolve, reject){
      if(picture._id){
        resourcePictures.update({pictureId: picture._id}, picture, function(){
          resolve({
            messsage: 'Picture ' + picture.titulo + ' updated successfully!',
            insert: false
          });
        }, function(error){
          console.log(error);
          {
            messsage: 'It was not possible to update picture ' + picture.titulo
          }
        })
      }else{
        resource.save(picture, function(){
          resolve({
            messsage: 'Picture ' + picture.titulo + ' inserted successfully!',
            insert: true
          });
        }, function(error){
          console.log(error);
          {
            messsage: 'It was not possible to insert picture ' + picture.titulo
          }
        });
      }
    });
  };

  return service;
});
