/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller("NewCharController", function($rootScope, $scope){

	NormalModeFlag($rootScope);
	FillControls($scope);
	SaveFirstStep($rootScope, $scope);
	Cancel($rootScope, $scope);
});

function NormalModeFlag($rootScope){

	/**
	 *
	 * Flaga normal_mode - gwarantująca przechowanie informacji czy użytkownik wybrał tryb normalny czy domowy.
	 * True, jeśli normalny, false wpp. Flaga dostępna jest z poziomu każdego widoku/kontrolera przez umieszczenie jej
	 * w rootScope.
	 *
	 */
	if($rootScope.normal_mode === undefined)
		$rootScope.normal_mode = true;

	/**
	 * Zmienia wartość flagi normal_mode.
	 * Funkcja dołączona do rootScope, gwarantuje dostępność z poziomu każdego widoku.
	 * @param flag - nowa flaga (true|false)
     */
	$rootScope.setNormalMode = function(flag){
		$rootScope.normal_mode = flag;
	};

}

function FillControls($scope){

	$scope.race = {};
	 // $scope.race.selected = $scope.raceList[3];
	$scope.raceList = [
		{
			name : 'Elf, Leśny',
			type : 'Elf'
		},
		{
			name : 'Elf, Wysokiego Rodu',
			type : 'Elf'
		},
		{
			name : 'Elf, Podziemny',
			type : 'Elf'
		},
		{
			name : 'Człowiek',
			type : 'Człowiek'
		},
		{
			name : 'Kransolud, Górski',
			type : 'Krasnolud'
		},
		{
			name : 'Kransolud, Wzgórzowy',
			type : 'Krasnolud'
		},
		{
			name : 'Półork',
			type : 'Półork'
		},
		{
			name : 'Niziołek, Lekkostopy',
			type : 'Niziołek'
		},
		{
			name : 'Półelf',
			type : 'Półelf'
		},
		{
			name : 'Gnom, Skalny',
			type : 'Gnom'
		}
	];
	
	$scope.type = {}
	$scope.typeList = [
		{ name : 'Barbarzyńca' },
		{ name : 'Bard' },
		{ name : 'Kleryk' },
		{ name : 'Druid' },
		{ name : 'Mnich' },
		{ name : 'Wojownik' },
		{ name : 'Łotrzyk' },
		{ name : 'Paladyn' },
		{ name : 'Czarodziej' },
		{ name : 'Zaklinacz' },
		{ name : 'Czarnoksiężnik' }		
	];
}

function SaveFirstStep($rootScope, $scope){
	
    if ($rootScope.newChar === undefined || $rootScope.newChar == null)
		$rootScope.newChar = new Object();
	
	$scope.SaveFirstStep = function(name, race, type, level, hp){
		$rootScope.newChar.name = name;
		$rootScope.newChar.race = race;
		$rootScope.newChar.type = type;
		$rootScope.newChar.level = level;
		$rootScope.newChar.hp = hp;
	};
}

function Cancel($rootScope, $scope){

	$scope.Cancel = function() {
		$rootScope.newChar = null;
	};
}