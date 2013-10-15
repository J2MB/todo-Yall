angular.module('todoyall').controller("TodoItemController",function($scope, $routeParams, TodoDataService){
    var id = parseInt($routeParams.index);
    $scope.item;
    angular.forEach(TodoDataService.list, function(item, index)
      {
          if(item.id === id) {
              $scope.item = item;
          }
      }
     );
});
