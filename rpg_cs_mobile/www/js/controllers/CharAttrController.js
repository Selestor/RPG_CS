/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('CharAttrController', function($scope, $location){
    $scope.swipeLeft = function(){
        $location.path('/charAbiAndTrumps')
    }
});