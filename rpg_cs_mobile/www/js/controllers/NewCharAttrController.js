/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller("NewCharAttrController", function($rootScope, $scope){
    
   $scope.editEnabled = true;
	SaveSecondStep($rootScope, $scope);
	
	$scope.attrList = [
		{name : 'Siła', value : 10},
		{name : 'Zręczność', value : 10},
		{name : 'Budowa', value : 10},
		{name : 'Inteligencja', value : 10},
		{name : 'Roztropność', value : 10},
		{name : 'Charyzma', value : 10}
	];
});

function SaveSecondStep($rootScope, $scope){
	
	$scope.SaveSecondStep = function(attrList){
		$rootScope.newChar.attrList = attrList;
	};
}