var j2mb = {};

j2mb.app = angular.module('todoyall',['ngRoute']);
j2mb.app.config(function($routeProvider) {
  $routeProvider
      .when('/', {
          templateUrl: 'partials/list.html', 
          controller: 'TodoController'
      })
      .when('/details/:index', {
          templateUrl: 'partials/todoItem.html', 
          controller: 'TodoItemController'
      })
      .otherwise({redirectTo: '/'});
});

j2mb.app.factory("TodoDataService", function(){
    var data = {};
    data.list = [
        { text : "Write this app",
          done : false,
          id: 0
        }
    ];
    data.removeMe = function(targetId){
        for(var i in data.list){
            if (data.list[i].id === targetId){
                data.list.splice(i,1);
                return;
            }   
        }
    }
    return data;
});

j2mb.app.directive('todoItem', function(TodoDataService) {
    var directiveDefinitionObject = {
        templateUrl: 'partials/todoItemDirective.tpl.html',
        restrict: 'E',
        scope: {
            todo: "=item",
            editMode: "="
        },
        controller: function($scope){
            $scope.removeMe = TodoDataService.removeMe;
        }
    };
    return directiveDefinitionObject;
});
