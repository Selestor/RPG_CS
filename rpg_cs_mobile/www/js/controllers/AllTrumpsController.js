/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller('AllTrumpsController', function($scope, $location){
    $scope.goToPoints = function(){
        $location.path('/points')
    }
});