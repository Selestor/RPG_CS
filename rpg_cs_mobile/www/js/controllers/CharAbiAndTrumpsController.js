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
	
	$scope.ArmorClass = calculateAC(calculateModifier($scope.current.attrList[1]), $scope.current.selectedArmors[0].power,  $scope.current.selectedArmors[0].type)
});

function calculateModifier(attributeValue) {
	return ((attributeValue - 10)/2) ;
}

function calculateAC(dexAC, armorAC, armorType) 
	if (armorAC === undefined || armorAC == null)
	{
		armorAC = 10;
		maxDexAC = 20;
	}
	switch(armorType)
	{
		case "Lekka":
			dexAC = dexAC
			break;
		case "Średnia":
			if (dexAC > 2) dexAC = 2
			else dexAC = dexAC
			break;
		case "Ćiężka":
			dexAC = 0
			break;
	}
	return (dexAC + armorAC);
}