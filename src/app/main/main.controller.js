(function() {
  'use strict';

  angular
  .module('dmstest')
  .controller('MainController', MainController)
  .factory('httpRequests', function($http){

  var getJwt = {
    getToken: function () {
      return $http.post('http://interview.kompanija.io/user_token',{"auth": {
        "email": "aj.rudi@gmail.com",
        "password": "dmstest123"
      }}).then(function (response) {
        return response.data;
      });
    }
  };

  return getJwt;

});

  /** @ngInject */

  function MainController( $scope, webDevTec, toastr, $http, $location,$routeParams, httpRequests) {
    var vm = this;

    vm.addForm = {};
    vm.editForm = {};
    vm.persons;
    vm.singlePersonId;

    vm.auttKey = httpRequests;

     httpRequests.getToken().then(function(data){
       vm.auttKey.key = data;
       console.log(vm.auttKey.key);

     });

     console.log(vm.auttKey);

    var reqGet = {
     method: 'GET',
     url: 'http://interview.kompanija.io/people',
     headers:{
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0ODcxMDMxODgsInN1YiI6Nn0.C8nvwdsTcCxaOjx70GjtRvmFTKkaSjiIu4DDJ9RHj2Y'
    }
  }
  var reqGetById = {
   method: 'GET',
   url: 'http://interview.kompanija.io/people',
   headers:{
     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0ODcxMDMxODgsInN1YiI6Nn0.C8nvwdsTcCxaOjx70GjtRvmFTKkaSjiIu4DDJ9RHj2Y'
   }
 }
 var reqAddPerson = {
   method: 'POST',
   url: 'http://interview.kompanija.io/people',
   headers:{
     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0ODcxMDMxODgsInN1YiI6Nn0.C8nvwdsTcCxaOjx70GjtRvmFTKkaSjiIu4DDJ9RHj2Y'
   },
   data:vm.addForm
 }

 var reqEditPerson = {
   method: 'PUT',
   url: 'http://interview.kompanija.io/people/' + vm.singlePersonId,
   headers:{
     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0ODcxMDMxODgsInN1YiI6Nn0.C8nvwdsTcCxaOjx70GjtRvmFTKkaSjiIu4DDJ9RHj2Y'
   },
   data:vm.editForm
 }

 var reqDeletePerson = {
   method: 'DELETE',
   url: 'http://interview.kompanija.io/people/'+ vm.singlePersonId,
   headers:{
     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0ODcxMDMxODgsInN1YiI6Nn0.C8nvwdsTcCxaOjx70GjtRvmFTKkaSjiIu4DDJ9RHj2Y'
   }
 }



      $http(reqGet)
      .then(function(response){
        vm.persons = response.data;
        console.log(response);
      });


      vm.submitAdd = function(){
        console.log('uso je u submit func');
        $http(reqAddPerson)
        .success(function(){
          console.log('submited')
          $location.path('/');
        })
        .error(function(){
          console.log('not submited')
        });
      }

      vm.submitEdit = function(){
        console.log('uso je u  submitEdit func');
        $http(reqEditPerson)
        .success(function(){
          console.log('submited')
          $location.path('/');
        })
        .error(function(){
          console.log('not submited')
        });
      }

      vm.deletePerson = function(){
        $http(reqDeletePerson)
        .success(function(){
          $location.path('/');
        })
      }

      vm.viewPerson = function (userId) {
      $location.path('/person/');

    };


     vm.editPerson = function (userId) {
      $location.path('/edit/' + userId);
      $http.get('http://interview.kompanija.io/people/'+userId, {
        headers: {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0ODcxMDMxODgsInN1YiI6Nn0.C8nvwdsTcCxaOjx70GjtRvmFTKkaSjiIu4DDJ9RHj2Y'
        }
      }).success(function(response){
        console.log(response)
      });
    };
  }

})();
