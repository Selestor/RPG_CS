/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller("NewCharController", function($scope){

	$scope.race = {};
	 // $scope.race.selected = $scope.raceList[3];
	$scope.raceList = [
		{
			name : 'Elf, Leśny',
			type : 'Elf'
		},
		{
			name : 'Elf, Wysokiego Rodu',
			type : 'Elf'
		},
		{
			name : 'Elf, Podziemny',
			type : 'Elf'
		},
		{
			name : 'Człowiek',
			type : 'Człowiek'
		},
		{
			name : 'Kransolud, Górski',
			type : 'Krasnolud'
		},
		{
			name : 'Kransolud, Wzgórzowy',
			type : 'Krasnolud'
		},
		{
			name : 'Półork',
			type : 'Półork'
		},
		{
			name : 'Niziołek, Lekkostopy',
			type : 'Niziołek'
		},
		{
			name : 'Półelf',
			type : 'Półelf'
		},
		{
			name : 'Gnom, Skalny',
			type : 'Gnom'
		}
	];
	
	$scope.type = {}
	$scope.typeList = [
		{ name : 'Barbarzyńca' },
		{ name : 'Bard' },
		{ name : 'Kleryk' },
		{ name : 'Druid' },
		{ name : 'Mnich' },
		{ name : 'Wojownik' },
		{ name : 'Łotrzyk' },
		{ name : 'Paladyn' },
		{ name : 'Czarodziej' },
		{ name : 'Zaklinacz' },
		{ name : 'Czarnoksiężnik' }		
	];


    


});