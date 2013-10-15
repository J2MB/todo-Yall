module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular.js',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular-route.js',
      'test/lib/angular/angular-mocks.js',
      'app/js/app.js',
        'app/js/TodoController.js',
        'app/js/TodoItemController.js',
    'test/unit/**/*.js'],

    exclude: ['app/lib/angular/angular-scenario.js'],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-junit-reporter',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}
