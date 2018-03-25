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

});
