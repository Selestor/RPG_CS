/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller("NewCharAttrController", function($rootScope, $scope){
    
   $scope.editEnabled = true;
	SaveSecondStep($rootScope, $scope);
	
	$scope.attrList = [
		{name : 'Siła', inputValue : 0, value : 10},
		{name : 'Zręczność', inputValue : 0, value : 10},
		{name : 'Budowa', inputValue : 0, value : 10},
		{name : 'Inteligencja', inputValue : 0, value : 10},
		{name : 'Roztropność', inputValue : 0, value : 10},
		{name : 'Charyzma', inputValue : 0, value : 10}
	];
});

function SaveSecondStep($rootScope, $scope){
	
	$scope.SaveSecondStep = function(attrList){
		$rootScope.newChar.attrList = attrList;
	};
}