/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('CharEquipmentController', function($rootScope, $scope, $location){
    $scope.swipeRight = function(){
        $location.path('/charAbiAndTrumps');
    }
	
	$scope.current = $rootScope.currentChar;
	
});