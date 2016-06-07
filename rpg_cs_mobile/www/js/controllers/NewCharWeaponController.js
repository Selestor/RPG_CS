/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('NewCharWeaponController', function($scope){

	$scope.weapon = {}
	$scope.weaponList = [
		{name : 'Miecz', type: 'Cięte', power : 'K4'},
		{name : 'Nóż', type: 'Cięte', power : 'K6'},
		{name : 'Włócznia', type: 'Kłute', power : 'K20'},
		{name : 'Łuk', type: 'Kłute', power : 'K12'},
		{name : 'Czołg', type: 'Miażdżone', power : 'K12'},
		{name : 'Młotek', type: 'Miażdżone', power : 'K20'}
	];
	
	$scope.selectedWeapons = [];

	$scope.addToSelectedWeapons = function(){
		$scope.selectedWeapons.push($scope.weapon.selected);
	};
	
	$scope.removeFromSelectedWeapons = function(name){
		for (var i = 0; i < $scope.selectedWeapons.length; ++i)
			if ($scope.selectedWeapons[i].name == name)
				$scope.selectedWeapons.splice(i, 1);
	};
	
	
	$scope.armor = {}
	$scope.armorList = [
		{name : 'Nazwa', power : 'Klasa pancerza', type : 'Lekka', bonus: 20},
		{name : 'Nazwa', power : 'Klasa pancerza', type : 'Lekka', bonus: 1}
	];
	
	$scope.selectedArmors = [];

	$scope.addToSelectedArmors = function(){
		$scope.selectedArmors.push($scope.armor.selected);
	};
	
	$scope.removeFromSelectedArmors = function(name){
		for (var i = 0; i < $scope.selectedArmors.length; ++i)
			if ($scope.selectedArmors[i].name == name)
				$scope.selectedArmors.splice(i, 1);
	};
	
	
	$scope.weaponTypes = ['Cięte', 'Kłute', 'Miażdżone'];
	$scope.weaponPowers = ['K4', 'K6', 'K8', 'K10', 'K12', 'K20'];
	$scope.weaponPower = {}
	$scope.weaponType = {}
	
	$scope.addWeapon = function(name, type, power){
		$scope.selectedWeapons.push({name : name, type: type, power: power});
	};
	
	$scope.armorTypes = ['lekka', 'średnia', 'ciężka'];
	$scope.armorType = {}

	$scope.addArmor = function(name, power, type, bonus){
		$scope.selectedArmors.push({name : name, power: power, type: type, bonus: bonus });
	};
});