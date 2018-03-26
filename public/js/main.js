angular.module('fabianopics',['myDirectives', 'ngAnimate', 'ngRoute', 'myServices'])
.config(function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider.when('/pics', {
    templateUrl: 'partials/principal.html',
    controller: 'PicturesController'
  });

  $routeProvider.when('/pics/new', {
    templateUrl: 'partials/picture.html',
    controller: 'PictureController'
  });

  $routeProvider.when('/pics/edit/:pictureId', {
    templateUrl: 'partials/picture.html',
    controller: 'PictureController'
  });

  $routeProvider.otherwise({redirectTo: '/pics'});

});
