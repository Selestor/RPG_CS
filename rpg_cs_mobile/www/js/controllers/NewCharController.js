/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller("NewCharController", function($rootScope, $scope){

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

	$scope.race = {};
	 // $scope.race.selected = $scope.raceList[3];
	$scope.raceList = [
		{
			name : 'Elf Leśny',
			type : 'Elf'
		},
		{
			name : 'Elf Wodny',
			type : 'Elf'
		},
		{
			name : 'Homo sapiens',
			type : 'Człowiek'
		},
		{
			name : 'Homo erectus',
			type : 'Człowiek'
		}
	];
	
	$scope.type = {}
	$scope.typeList = [
		{ name : 'Barbarzyńca' },
		{ name : 'Bard' },
		{ name : 'Kleryk' },
		{ name : 'Druid' },
		{ name : 'Łowca' }		
	];


    


});