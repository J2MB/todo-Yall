'use strict';

/* jasmine specs for controllers go here */
describe('todo list controllers', function() {

  describe('TodoController', function(){

    beforeEach(module('todoyall'));

    it('should create "todos" model with 1 item', inject(function($controller) {
      var scope = {},
          ctrl = $controller('TodoController', {$scope:scope});

      expect(scope.todos.length).toBe(1);
    }));

  });
});
