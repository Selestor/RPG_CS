/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('CharAbiAndTrumpsController', function($scope, $location){
    $scope.swipeRight = function(){
        $location.path('/charAttr')
    };
    $scope.swipeLeft = function(){
        $location.path('/charEquipment')
    };
	
    $scope.abilityList = [
		{name : 'Religia', value : '+6'},
		{name : 'Ukrywanie się', value : '+3'},
		{name : 'Natura', value : '+1'}
	];
	
	$scope.classTrumpList = [
		{id: 1, name : 'Atut1', description : 'Opis atutu 1'},
		{id : 2, name : 'Atut2', description : 'Opis atutu 2'},
		{id : 3, name : 'Atut3', description : 'Opis atutu 3'}
	];
});