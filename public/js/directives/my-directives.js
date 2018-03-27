angular.module('myDirectives', []).directive('myPanel', function(){
  var ddo = {};
  ddo.restrict = "AE";
  ddo.transclude = true;
  ddo.scope = {
    titulo: '@title'
  };

  ddo.templateUrl = 'js/directives/my-panel.html';
  return ddo;
})
.directive('myPic', function() {

        var ddo = {};
        ddo.restrict = "AE";
        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive center-block" ng-src="{{url}}" alt="{{titulo}}">';

        return ddo;

})
.directive('myDangerButton', function() {

        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            name: '@',
            action: '&'
        };

        ddo.template = '<button class="btn btn-danger btn-block" ng-click="action(pic)">{{name}}</button>';

        return ddo;

})
.directive('myFocus', function() {
        var ddo = {};
        ddo.restrict = "A";
        /* not needed when using $broadcast. it also can be removed from picture.html
        ddo.scope = {
            focused : '='
        };
        */

        ddo.link = function(scope, element) {
          scope.$on('pictureInsertedUpdated', function(){
            element[0].focus();
          });
        }


        /* replaced by code above
          ddo.link = function(scope, element) {
            scope.$watch('focused', function() {

                if (scope.focused) {
                    element[0].focus();
                    scope.focused = false;
                }
            });
        };*/

        return ddo;
})
.directive('myTitles', function() {
    var ddo = {};
    ddo.restrict = 'E';
    ddo.template = '<ul><li ng-repeat="title in titles">{{title}}</li></ul>';
    ddo.controller = function($scope, resourcePictures) {
      resourcePictures.query(function(pictures) {
                $scope.titles = pictures.map(function(picture) {
                    return picture.titulo;
                });
            });
    };
    return ddo;
});
