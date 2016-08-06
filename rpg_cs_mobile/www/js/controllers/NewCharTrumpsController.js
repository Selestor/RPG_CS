/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('NewCharTrumpsController', function($rootScope,$scope, $location){
    
	SaveFourthStep($rootScope, $scope);
	
    $scope.selectedClass = 'Wojownik';
	$scope.classTrumpList = [
		{id: 1, name : 'Szczęściarz', description : 'Opis atutu 1', isChecked : false},
		{id : 2, name : 'Mistrz broni dwuręcznej', description : 'Opis atutu 2'},
		{id : 3, name : 'Mistrz włądania dwoma broniami', description : 'Opis atutu 3', isChecked : false},
		{id : 4, name : 'Mistrz kuszy', description : 'Opis atutu 3', isChecked : false},
		{id : 5, name : 'Adept', description : 'Opis atutu 3', isChecked : false},
		{id : 6, name : 'Snajper', description : 'Opis atutu 3', isChecked : false},
		{id : 7, name : 'Mistrz włądania dwoma broniami', description : 'Opis atutu 3', isChecked : false}
	];
	
	$scope.additionalTrumpList = [
		//{id: 1, name : 'Dodatkowy atut1', description : 'Opis atutu 1'},
		//{id : 2, name : 'Dodatkowy atut2', description : 'Opis atutu 2'},
		//{id : 3, name : 'Dodatkowy atut3', description : 'Opis atutu 3'}
	];
	
	
    $scope.goToTrumps = function(){
        $location.path("/allTrumps");
    };
	
	$scope.newAbiblityName = "";
	$scope.AddTrump = function(name, description){
		var lastIdIndex = $scope.additionalTrumpList.length-1;
		var lastId = $scope.additionalTrumpList[lastIdIndex];
		$scope.additionalTrumpList.push({id: lastId+1, name: name, description : description, isChecked : true});
	};
});

function SaveFourthStep($rootScope, $scope){
	
	$scope.SaveFourthStep = function(classTrumpList, additionalTrumpList){
		$rootScope.newChar.classTrumpList = classTrumpList;
		$rootScope.newChar.additionalTrumpList = additionalTrumpList;		
	};
}