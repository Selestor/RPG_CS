/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('CharAttrController', function($scope, $location){
    $scope.swipeLeft = function(){
        $location.path('/charAbiAndTrumps')
    }
	
	
	$scope.attrList = [
		{name : 'Siła', value : 7},
		{name : 'Zręczność', value : 15},
		{name : 'Budowa', value : 10},
		{name : 'Inteligencja', value : 20},
		{name : 'Roztropność', value : 1},
		{name : 'Charyzma', value : 3},
	];
	
	// funkcja liczaca modyfikator zadanego atrybutu
	function calculateModifier(attributeValue) {
    return ((attributeValue - 10)/2) ;
	}
});