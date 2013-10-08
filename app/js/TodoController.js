j2mb.app.controller("TodoController",function($scope, TodoDataService){
    $scope.todos = TodoDataService.list; 
    
    var count = $scope.todos.length;
    
    $scope.editMode = false;
    
    $scope.toggleEdit = function(){ $scope.editMode=!$scope.editMode;
                                  }

    $scope.add = function(form){
        if (form.$invalid){
            return;
        }
        $scope.todos.push({ text : $scope.newTodo,
         done : false , id : count++});
        
        $scope.newTodo = "";
        $scope.datToDoForm.$setPristine();
    }
    
    $scope.removeMe = function(index){
        $scope.todos.splice(index,1);
    }
    
});
	
j2mb.app.directive('noBlank', function() {
    return { 
    require: 'ngModel',
    link: function(scope, element, attrs, controller) {
    
    var validate = function(value){
       if (value == undefined || value == ""){
           controller.$setValidity('noBlank',false);
           return undefined;
       }else{
           controller.$setValidity('noBlank',true);
           return value;
       }
    };
        
    controller.$parsers.push(validate);
    controller.$formatters.push(validate);
    
    }
    };
});
