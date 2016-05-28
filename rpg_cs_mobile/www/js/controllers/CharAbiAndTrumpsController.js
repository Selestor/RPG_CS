/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('CharAbiAndTrumpsController', function($scope, $location){
    $scope.swipeRight = function(){
        $location.path('/charAttr')
    };
    $scope.swipeLeft = function(){
        $location.path('/charEquipment')
    };
});