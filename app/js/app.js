var j2mb = {};

j2mb.app = angular.module('todoyall',['ngRoute']);
j2mb.app.config(function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/list.html', controller: 'TodoController'}).
    when('/details/:index', {templateUrl: 'partials/todoItem.html', controller: 'TodoItemController'}).
      otherwise({redirectTo: '/'});
});

j2mb.app.factory("TodoDataService", function(){
    var data = {};
    data.list = [
        { text : "Write this app",
         done : false }
    ];
    //This is a thing!
    return data;
});
