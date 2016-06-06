/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller("NewCharController", function($scope){

	$scope.race = {};
	 // $scope.race.selected = $scope.raceList[3];
	$scope.raceList = [
		{
			name : 'Elf Leśny',
			type : 'Elf'
		},
		{
			name : 'Elf Wodny',
			type : 'Elf'
		},
		{
			name : 'Homo sapiens',
			type : 'Człowiek'
		},
		{
			name : 'Homo erectus',
			type : 'Człowiek'
		}
	];
	
	$scope.type = {}
	$scope.typeList = [
		{ name : 'Barbarzyńca' },
		{ name : 'Bard' },
		{ name : 'Kleryk' },
		{ name : 'Druid' },
		{ name : 'Łowca' }		
	];


    


});