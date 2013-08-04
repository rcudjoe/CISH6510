'use strict';

angular.module('MyCarousel', ['ui.bootstrap']);
function MyCarouselCtrl($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function () {
        slides.push({
            image: ['../img/Tornado-Cocktail-Mixer-640x300.jpg/640/300',
            '../img/shutterstock_1125948321-640x300.jpg/640/300',
            '../img/Grand-view_-14-640x300.jpg/640/300',
            '../img/draftmark1-640x300.jpg/640/300',
            '../img/cocktail-slider-640x300.jpg/640/300/200'][slides.length % 5]
        });
    };
    for (var i = 0; i < 5; i++) {
        $scope.addSlide();
    }
}

