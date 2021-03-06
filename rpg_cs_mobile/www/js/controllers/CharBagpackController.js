/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('CharBagpackController', function($scope){
    
	$scope.ArmorClass = calculateAC($scope.current.attrList[1].modifier, $scope.current.selectedArmors[0].power,  $scope.current.selectedArmors[0].type)
});

function calculateAC(dexAC, armorAC, armorType){
	if (armorAC === undefined || armorAC == null)
	{
		armorAC = 10;
		maxDexAC = 20;
	}
	switch(armorType)
	{
		case "Lekka":
			break;
		case "Średnia":
			if (dexAC > 2) dexAC = 2;
			break;
		case "Ćiężka":
			dexAC = 0;
			break;
	}
	return (dexAC + parseInt(armorAC));
}