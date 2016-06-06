/**
 * Created by pyrkap on 28.05.2016.
 */

var mainApp = angular.module('mainApp', ['ngRoute', 'mobile-angular-ui', 'mobile-angular-ui.gestures', 'ngSanitize', 'ui.select']);

/**
 *
 * Konfiguracja routingu między widokami
 *
 */
mainApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/newChar',{
            templateUrl: 'templates/newChar.html',
            controller: 'NewCharController'
        }).
        when('/newCharAttr',{
            templateUrl: 'templates/newCharAttr.html',
            controller: 'NewCharAttrController'
        }).
        when('/newCharAbilities', {
            templateUrl: 'templates/newCharAbilities.html',
            controller: 'NewCharAbilitiesController'
        }).
        when('/newCharTrumps', {
            templateUrl: 'templates/newCharTrumps.html',
            controller: 'NewCharTrumpsController'
        }).
        when('/newCharWeapon', {
            templateUrl: 'templates/newCharWeapon.html',
            controller: 'NewCharWeaponController'
        }).
        when('/allTrumps', {
            templateUrl: 'templates/allTrumps.html',
            controller: 'AllTrumpsController'
        }).
        when('/points', {
            templateUrl: 'templates/points.html',
            controller: 'PointsController'
        }).
        when('/newCharInfo',{
            templateUrl: 'templates/newCharInfo.html',
            controller: 'NewCharInfoController'
        }).
        when('/charAttr', {
            templateUrl: 'templates/charAttr.html',
            controller: 'CharAttrController'
        }).
        when('/charAbiAndTrumps', {
            templateUrl: 'templates/charAbiAndTrumps.html',
            controller: 'CharAbiAndTrumpsController'
        }).
        when('/charEquipment',{
            templateUrl: 'templates/charEquipment.html',
            controller: 'CharEquipmentController'
        }).
        when('/charBagpack', {
            templateUrl: 'templates/charBagpack.html',
            controller: 'CharBagpackController'
        }).
        otherwise({
            templateUrl: 'templates/charList.html',
            controller: 'CharListController'
        });
}]);


/**
 *
 * Prosta dyrektywa powrótu do poprzedniej strony.
 * Przykłady użycia:
 *      <button back>...</button>
 *      <a back>...</a>
 *
 * !!! Ważne !!!
 * To jest odpowiednik przycisku z przeglądarki. Formularze itd. zostaną utracone!
 * Używać tylko jeśli chce się wrócić bez argumentów z aktualnego widoku!
 *
 */
mainApp.directive('back', ['$window', function($window) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.bind('click', function () {
                $window.history.back();
            });
        }
    };
}]);