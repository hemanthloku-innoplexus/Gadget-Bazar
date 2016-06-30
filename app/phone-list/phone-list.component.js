 angular.
   module('phoneList').
   component('phoneList', {
     templateUrl: 'templates/phonelist.html',
     controller: PhoneFilterController,
     controllerAs:'filterctrl'
   });

   function PhoneFilterController($http,$rootScope){
     var self = this;
    $http.get('phones/phones.json').then(function(response) {
      self.phones = response.data;
      console.log(response);
    });

    this.getid = function(val){
      $rootScope.$broadcast('someEvent',val);

    }

    this.brandName = "motorola";
    this.getPhones = function(company){
      console.log(company);
      this.brandName = company;

    }

   }
