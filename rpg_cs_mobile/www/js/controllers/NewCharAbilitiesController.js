/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('NewCharAbilitiesController', function($scope){
    $scope.abilityList = [
		{name : 'Religia', isChecked : false},
		{name : 'Ukrywanie się', isChecked : true},
		{name : 'Natura', isChecked : false}
	];
});