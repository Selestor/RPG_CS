/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('CharAttrController', function($rootScope, $scope, $location){
    $scope.swipeLeft = function(){
        $location.path('/charAbiAndTrumps')
    }
	
	$scope.current = $rootScope.currentChar;
});

// funkcja liczaca modyfikator zadanego atrybutu
function calculateModifier(attributeValue) {
	return ((attributeValue - 10)/2) ;
}