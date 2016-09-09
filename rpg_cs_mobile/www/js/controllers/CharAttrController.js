/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('CharAttrController', function($rootScope, $scope, $location){
    $scope.swipeLeft = function(){
        $location.path('/charAbiAndTrumps')
    }
	
	$scope.current = $rootScope.currentChar;
    $scope.proficiency = calculateProficiency($scope.current.level);
});

// funkcja liczaca modyfikator zadanego atrybutu
function calculateModifier(attributeValue) {
	return ((attributeValue - 10)/2) ;
}

function calculateProficiency(level){
    return ((level - 1) / 4) + 2;
}