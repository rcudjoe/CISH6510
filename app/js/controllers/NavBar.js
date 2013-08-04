angular.module('TypesofDrinks', ['ui.bootstrap']);
function TypesofDrinksCtrl($scope) {
    $scope.oneAtATime = true;

    $scope.Drinks = [
    { "name": "Spirits", "url": "spirits" },
    { "name": "Liqueurs", "url": "liqueurs" },
    { "name": "Wines", "url": "wines" },
    { "name": "Champagne", "url": "champagne" },
    { "name": "Fortified Wines", "url": "fortifiedwines" },
    { "name": "Beer", "url": "beer" },
    { "name": "Cider", "url": "cider" },
    { "name": "Non-Alcoholic", "url": "nonalcoholic"}];

    $scope.orderProp = 'name';
   
    $scope.MakingDrinks = [
    { "name": "Gin", "url":"mdgin"},
    { "name": "Vodka", "url": "mdvodka" },
    { "name": "Rum", "url": "mdrum" },
    { "name": "Whisky", "url": "mdwhisky" },
    { "name": "Tequila", "url": "mdtequila" },
    { "name": "Brandy", "url": "mdbrandy" }];
    $scope.orderProp = 'name';

    $scope.ConnectWithUs = [
    { "name": "Twitter" },
    { "name": "Facebook" },
    { "name": "Flickr" },
    { "name": "Email" }];
    $scope.orderProp = 'name';

    $scope.Bartending = [
    { "name": "Bartending Equipment" },
    { "name": "Glasses" },
    { "name": "Garnishes" } ];
    $scope.orderProp = 'name';
 
}
