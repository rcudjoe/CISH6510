'use strict';

/* Controllers */

function SpiritListCtrl($scope, Spirit) {
    $scope.spirits = Spirit.query();
    $scope.orderProp = 'age';
}

function LiqueursListCtrl($scope, Liqueur) {
    $scope.liqueurs = Liqueur.query();
    $scope.orderProp = 'age';
}
function champagneListCtrl($scope, Champagne) {
    $scope.champagne = Champagne.query();
    $scope.orderProp = 'age';
}
function beerListCtrl($scope, Beer) {
    $scope.beer = Beer.query();
    $scope.orderProp = 'age';
}

function ciderListCtrl($scope, Cider) {
    $scope.cider = Cider.query();
    $scope.orderProp = 'age';
}

function nonalcoholicListCtrl($scope, Nonalcoholic) {
    $scope.nonalcoholic = Nonalcoholic.query();
    $scope.orderProp = 'age';
}

function fortifiedwinesListCtrl($scope, FortifiedWine) {
    $scope.fortifiedwine = FortifiedWine.query();
    $scope.orderProp = 'age';
}

function winesListCtrl($scope, Wine) {
    $scope.wine = Wine.query();
    $scope.orderProp = 'age';
}

function ginmixersListCtrl($scope, Ginmixers) {
    $scope.ginmixers = Ginmixers.query();
    $scope.orderProp = 'age';
}

function brandyListCtrl($scope, Brandy) {
    $scope.brandy = Brandy.query();
    $scope.orderProp = 'age';
}

function rumListCtrl($scope, Rum) {
    $scope.rum = Rum.query();
    $scope.orderProp = 'age';
}

function tequilaListCtrl($scope, Tequila) {
    $scope.tequila = Tequila.query();
    $scope.orderProp = 'age';
}

function vodkaListCtrl($scope, Vodka) {
    $scope.vodka = Vodka.query();
    $scope.orderProp = 'age';
}

function whiskyListCtrl($scope, Whisky) {
    $scope.whisky = Whisky.query();
    $scope.orderProp = 'age';
}
