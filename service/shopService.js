angular.module('assessment').service('shopService', function($http) {
    var BaseUrl = ' http://practiceapi.devmounta.in/products';

    this.getShop = function() {
        return $http({
          method: "GET",
          url: BaseUrl
        }).then(function(response) {
            if (response.status === 200) {
                return response.data;
            } else {
                return "Error! " + results.status;
            }
        })
    }

    this.getProduct = function(id){
      return $http({
        method: 'GET',
        url: BaseUrl + "/" + id
      })
      .then(function(response){
        return response.data;
      })
    }

})
