/**
 * Created by pyrkap on 28.05.2016.
 */

mainApp.controller("CharListController", function($scope, $location){
    
    $scope.goToAttr = function(){
        $location.path('/charAttr');
    };
    
});