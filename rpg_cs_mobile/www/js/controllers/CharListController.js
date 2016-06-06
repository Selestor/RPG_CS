/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller("CharListController", function($scope, $location){
    
	$scope.charList = [{
			id : 1,
			name : 'Klaudia',
			race : 'Elf',
			type : 'Wojownik',
			level : 2
		},
		{
			id : 1,
			name : 'Roman',
			race : 'Pół elf pół wiedźmin',
			type : 'Wojownik',
			level : 2
		},
		{
			id : 1,
			name : 'Patryk',
			race : 'Prawie elf',
			type : 'Wojownik',
			level : 2
		},];
	
    $scope.goToAttr = function(){
        $location.path('/charAttr');
    };
    
});