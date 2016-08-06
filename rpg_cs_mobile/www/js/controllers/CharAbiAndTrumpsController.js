/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('CharAbiAndTrumpsController', function($rootScope, $scope, $location){
    $scope.swipeRight = function(){
        $location.path('/charAttr')
    };
    $scope.swipeLeft = function(){
        $location.path('/charEquipment')
    };
	
	$scope.current = $rootScope.currentChar;
});