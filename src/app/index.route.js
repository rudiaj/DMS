(function() {
  'use strict';

  angular
    .module('dmstest')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController as vm'
      })
      .when('/add', {
        templateUrl: 'app/main/add-person.html',
        controller: 'MainController as vm'
      })
      .when('/edit/:id', {
        templateUrl: 'app/main/edit-person.html',
        controller: 'MainController as vm'
      })
      .when('/person', {
        templateUrl: 'app/main/single-person.html',
        controller: 'MainController as vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
