/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller("CharListController", function($rootScope, $scope, $location){
    
	var savedChars = localStorage.getItem('charList');
	$scope.charList = (savedChars != null) ? JSON.parse(savedChars) : [];

	console.log($scope.charList);

	//localStorage.removeItem("charList"); 
	
	
    $scope.goToAttr = function(id){
	
		var currentChar = GetCharById($scope.charList, id);
		if (currentChar == null)
			alert("Brak postaci do wyświetlenia");
		
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