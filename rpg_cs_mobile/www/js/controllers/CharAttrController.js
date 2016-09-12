/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('CharAttrController', function($rootScope, $scope, $location){
    $scope.swipeLeft = function(){
        $location.path('/charAbiAndTrumps')
    }
	
	$scope.current = $rootScope.currentChar;
    $scope.proficiency = calculateProficiency($scope.current.level);
    
    for(var i = 0; i < $scope.current.attrList.length; i++){
        $scope.current.attrList[i].modifier = calculateModifier($scope.current.attrList[i].value);
    }
});

function calculateModifier(attributeValue) {
	return Math.floor((attributeValue - 10)/2) ;
}

function calculateProficiency(level){
    return Math.floor((level - 1) / 4) + 2;
}