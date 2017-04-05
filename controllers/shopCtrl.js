angular.module('assessment').controller('shopCtrl', function($scope,shopService){
  $scope.getShop = function() {
      shopService.getShop().then(function(results) {
        console.log(results)
        $scope.shoppingList = results;
      })
    };
    

})
