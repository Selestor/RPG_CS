/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('CharEquipmentController', function($scope, $location){
    $scope.swipeRight = function(){
        $location.path('/charAbiAndTrumps');
    }
	
	$scope.weaponList = [
		{name : 'Miecz', type: 'Cięte', power : 'K4'},
		{name : 'Nóż', type: 'Cięte', power : 'K6'},
		{name : 'Włócznia', type: 'Kłute', power : 'K20'},
		{name : 'Łuk', type: 'Kłute', power : 'K12'},
		{name : 'Czołg', type: 'Miażdżone', power : 'K12'},
		{name : 'Młotek', type: 'Miażdżone', power : 'K20'}
	];
	
	$scope.armorList = [
		{name : 'Nazwa', power : 'Klasa pancerza', type : 'Lekka', bonus: 20},
		{name : 'Nazwa', power : 'Klasa pancerza', type : 'Lekka', bonus: 1}
	];
	
	$scope.stuffList = [
		{name: 'Długopis', quantity : 3},
		{name: 'Pendrive', quantity : 12},
		{name: 'Śrubokręt', quantity : 1},
		{name: 'MacBook', quantity : 5}		
	];
});