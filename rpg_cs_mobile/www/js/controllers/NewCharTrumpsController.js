/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('NewCharTrumpsController', function($scope, $location){
    
    $scope.selectedClass = 'Wojownik';
	$scope.classTrumpList = [
		{id: 1, name : 'Szczęściarz', description : 'Opis atutu 1'},
		{id : 2, name : 'Mistrz broni dwuręcznej', description : 'Opis atutu 2'},
		{id : 3, name : 'Mistrz włądania dwoma broniami', description : 'Opis atutu 3'},
		{id : 3, name : 'Mistrz kuszy', description : 'Opis atutu 3'},
		{id : 3, name : 'Adept', description : 'Opis atutu 3'},
		{id : 3, name : 'Snajper', description : 'Opis atutu 3'},
		{id : 3, name : 'Mistrz włądania dwoma broniami', description : 'Opis atutu 3'}
	];
	
	$scope.additionalTrumpList = [
		{id: 1, name : 'Dodatkowy atut1', description : 'Opis atutu 1'},
		{id : 2, name : 'Dodatkowy atut2', description : 'Opis atutu 2'},
		{id : 3, name : 'Dodatkowy atut3', description : 'Opis atutu 3'}
	];
	
    $scope.goToTrumps = function(){
        $location.path("/allTrumps");
    };
});