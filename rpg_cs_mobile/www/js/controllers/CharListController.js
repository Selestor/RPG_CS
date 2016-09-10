/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller("CharListController", function($rootScope, $scope, $location){
    
	var savedChars = localStorage.getItem('charList');
	$scope.charList = (savedChars != null) ? JSON.parse(savedChars) : [];
	
	$scope.deleteElement = function(id, charName){
		if(typeof(id) == 'undefined'){
			alert("Brak postaci do usunięcia");
			return;
		}
		var r = confirm("Na pewno usunąć postać "+charName+"?");
		if(!r)
			return;
		var i;
		for(i = 0; i < $scope.charList.length; i ++ ){
			if( $scope.charList[i].Id === id ) 
				break;		
		}
		$scope.charList.splice(i, 1);
		charListJson = angular.toJson($scope.charList);
		localStorage.setItem('charList', charListJson);
	}
	
	
   $scope.goToAttr = function(id){
	
		var currentChar = GetCharById($scope.charList, id);
		if (currentChar == null){
			alert("Brak postaci do wyświetlenia");
			return;
		}
		
		$rootScope.currentChar = currentChar;
		$location.path('/charAttr');
   };
    
});

function GetCharById(list, id)
{
	for (var i = 0; i < list.length; ++i)
	{
		if (list[i].Id == id)
			return list[i];
	}
	return null;
}