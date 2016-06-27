/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('NewCharWeaponController', function($scope){

	$scope.weapon = {}
	$scope.weaponList = [
		{name : 'Miecz, Krótki', type: 'Kłute', power : 'k6'},
		{name : 'Miecz, Długi', type: 'Cięte', power : 'k8'},
		{name : 'Nóż', type: 'Kłute', power : 'k4'},
		{name : 'Włócznia', type: 'Kłute', power : 'k6'},
		{name : 'Łuk, Długi', type: 'Kłute', power : 'k10'},
		{name : 'Kusza, Lekka', type: 'Kłute', power : 'k10'},
		{name : 'Kusza, Ciężka', type: 'Kłute', power : 'k12'},
		{name : 'Kusza, Ręczna', type: 'Kłute', power : 'k6'},
		{name : 'Łuk, Krótki', type: 'Kłute', power : 'k6'},
		{name : 'Młot Bojowy', type: 'Miażdżone', power : 'k8'}
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
		{name : 'Zbroja Ćwiekowa', power : '12', type : 'Lekka', bonus: 10},
		{name : 'Kolczuga', power : '16', type : 'Średnia', bonus: 2},
		{name : 'Pełna Zbroja Płytowa', power : '18', type : 'Ciężka', bonus: 0}
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
	$scope.weaponPowers = ['k4', 'k6', 'k8', 'k10', 'k12', 'k20'];
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