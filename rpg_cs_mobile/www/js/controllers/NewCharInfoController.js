/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('NewCharInfoController', function($rootScope, $scope){

	SaveSixthStep($rootScope, $scope);

    $scope.stuffList = [];
	$scope.addToStuff = function(name, quantity)
	{
		$scope.stuffList.push({name: name, quantity : quantity});
	};
	$scope.removeFromStuff = function(name)
	{
		for (var i = 0; i < $scope.stuffList.length; ++i)
			if ($scope.stuffList[i].name == name)
			{
				$scope.stuffList.splice(i,1);
				break;
			}
	};
});

function SaveSixthStep($rootScope, $scope){
	
	$scope.SaveSixthStep = function(stuffList, description, notes){
		$rootScope.newChar.stuffList = stuffList;
		$rootScope.newChar.description = description;	
		$rootScope.newChar.notes = notes;	
		
		SaveCharacter($rootScope);
	};
}

function SaveCharacter($rootScope) {

	var savedLastCharId = localStorage.getItem('lastCharId');
	var lastCharId = (savedLastCharId != null) ? parseInt(savedLastCharId)+1 : 0;
	
	$rootScope.newChar.Id = lastCharId.toString();

	var charListInJson = localStorage.getItem('charList');
	var charList = [];
	if (charListInJson != null)
	{
		charList = JSON.parse(charListInJson);
	}
	charList.push($rootScope.newChar);
	var json = angular.toJson(charList);
	alert(json);
	localStorage.setItem('charList', json);
	localStorage.setItem('lastCharId', lastCharId.toString());
	$rootScope.newChar = null;

}