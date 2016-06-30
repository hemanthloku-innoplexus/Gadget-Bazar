angular.
  module('phoneDiscp').
  component('phoneDiscp', {
    templateUrl: 'templates/phonedescription.html',
    controller: PhoneFilterController,
    controllerAs:'phoneDiscp'
  });

  function PhoneFilterController($http,$rootScope){
    var self = this;
  //  $http.get('phones/nexus-s.json').then(function(response) {
  //    self.phones = response.data;
  //    console.log(response);
    //  console.log(self.phones.id);
    $http.get("phones/motorola-xoom-with-wi-fi.json").then(function(response) {
      self.phones = response.data;
    // do what you want to do
   });


    $rootScope.$on('someEvent', function(event, args) {
      console.log("innn",args);
      $http.get("phones/"+args+".json").then(function(response) {
        self.phones = response.data;
      // do what you want to do
  });

   });

  }
