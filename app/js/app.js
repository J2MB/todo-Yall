var j2mb = {};

j2mb.app = angular.module('todoyall',['ngRoute']);
j2mb.app.config(function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/list.html', controller: 'TodoController'}).
      otherwise({redirectTo: '/'});
});
