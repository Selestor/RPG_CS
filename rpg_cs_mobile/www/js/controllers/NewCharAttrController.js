/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller("NewCharAttrController", function($scope){
    
    $scope.editEnabled = true;
	
	$scope.attrList = [
		{name : 'Siła', value : 7},
		{name : 'Zręczność', value : 15},
		{name : 'Budowa', value : 10},
		{name : 'Inteligencja', value : 20},
		{name : 'Roztropność', value : 1},
		{name : 'Charyzma', value : 3},
	];
    
});