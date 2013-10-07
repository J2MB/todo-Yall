var j2mb = {};

j2mb.app = angular.module('todoyall',[]);

j2mb.app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {templateURL:'partials/todoList.html', controller:TodoController})
}]);
