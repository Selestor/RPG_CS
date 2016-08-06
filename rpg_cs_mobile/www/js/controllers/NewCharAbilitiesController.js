/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('NewCharAbilitiesController', function($rootScope, $scope){

	SaveThirdStep($rootScope, $scope);
	
    $scope.abilityList = [
		{name : 'Religia', isChecked : false},
		{name : 'Ukrywanie się', isChecked : false},
		{name : 'Zręczne Dłonie', isChecked : false},
		{name : 'Arkana', isChecked : false},
		{name : 'Atletyka', isChecked : false},
		{name : 'Akrobatyka', isChecked : false},
		{name : 'Spostrzegawczość', isChecked : false},
		{name : 'Dyplomacja', isChecked : false},
		{name : 'Zastraszanie', isChecked : false},
		{name : 'Wyczucie pobudek', isChecked : false},
		{name : 'Natura', isChecked : false}
	];
});

function SaveThirdStep($rootScope, $scope){
	
	$scope.SaveThirdStep = function(abilityList){
		$rootScope.newChar.abilityList = abilityList;
	};
}