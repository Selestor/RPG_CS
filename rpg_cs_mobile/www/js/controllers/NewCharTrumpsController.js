/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('NewCharTrumpsController', function($scope, $location){
    
    
    $scope.goToTrumps = function(){
        $location.path("/allTrumps");
    };
});