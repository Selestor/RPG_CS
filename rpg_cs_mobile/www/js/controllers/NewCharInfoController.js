/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('NewCharInfoController', function($scope){
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