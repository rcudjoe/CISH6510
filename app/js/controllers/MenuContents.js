
function TopMenuCtrl($scope) {
    $scope.TopMenu = [
    { "name": "Home", "url":"home" },
    { "name": "About Us", "url":"about" },
    { "name": "Blog", "url":"blog" },
    { "name": "Contact Us", "url":"contact" },
  ];
    $scope.orderProp = 'name';
}


