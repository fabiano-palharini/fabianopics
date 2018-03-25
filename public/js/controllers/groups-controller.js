angular.module('fabianopics').controller('GroupsController', function($scope, $http){
  $scope.groups = [];

  $http.get('v1/grupos')
  .success(function(groups){
    console.log(groups);
    $scope.groups = groups;
  })
  .error(function() {
    console.log("error retrieving groups");
  });
})
