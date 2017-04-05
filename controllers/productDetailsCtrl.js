angular.module('assessment').controller('productDetailsCtrl', function($scope,shopService,$stateParams){

  shopService.getProduct($stateParams.id)
  .then(function(response){
    $scope.getProduct = response;
  })

})
