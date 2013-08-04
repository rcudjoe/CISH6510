'use strict';
var cocktailsApp = angular.module('cocktailsApp', []);
cocktailsApp.config(function cocktailsApp($routeProvider) {
    $routeProvider
        .when('/home',
            {
                controller: 'MyCarouselCtrl',
                templateUrl: '../partials/home.html'
            })
        .when('/spirits',
            {
                controller: 'SpiritListCtrl',
                templateUrl: '../partials/spirits.html'
            })
            .when('/liqueurs',
            {
                controller: 'LiqueursListCtrl',
                templateUrl: '../partials/liqueurs.html'
            })
            .when('/wines',
            {
                controller: 'winesListCtrl',
                templateUrl: '../partials/wines.html'
            })
            .when('/champagne',
            {
                controller: 'champagneListCtrl',
                templateUrl: '../partials/champagne.html'
            })
            .when('/fortifiedwines',
            {
                controller: 'fortifiedwinesListCtrl',
                templateUrl: '../partials/fortifiedwines.html'
            })
            .when('/beer',
            {
                controller: 'beerListCtrl',
                templateUrl: '../partials/beer.html'
            })
             .when('/cider',
            {
                controller: 'ciderListCtrl',
                templateUrl: '../partials/cider.html'
            })
             .when('/nonalcoholic',
            {
                controller: 'nonalcoholicListCtrl',
                templateUrl: '../partials/nonalcoholic.html'
            })
             .when('/mdgin',
            {
                controller: 'ginmixersListCtrl',
                templateUrl: '../partials/mdgin.html'
            })
             .when('/mdvodka',
            {
                controller: 'vodkaListCtrl',
                templateUrl: '../partials/mdvodka.html'
            })
              .when('/mdrum',
            {
                controller: 'rumListCtrl',
                templateUrl: '../partials/mdrum.html'
            })
              .when('/mdwhisky',
            {
                controller: 'whiskyListCtrl',
                templateUrl: '../partials/mdwhisky.html'
            })
              .when('/mdtequila',
            {
                controller: 'tequilaListCtrl',
                templateUrl: '../partials/mdtequila.html'
            })
              .when('/mdbrandy',
            {
                controller: 'brandyListCtrl',
                templateUrl: '../partials/mdbrandy.html'
            })
             .when('/about',
            {
                controller: 'BartendingTechniquesController',
                templateUrl: '../partials/about.html'
            })

           .when('/blog',
            {
                controller: 'MakingDrinksController',
                templateUrl: '../partials/blog.html'
            })
            .when('/contact',
            {
                controller: 'MakingDrinksController',
                templateUrl: '../partials/contact.html'
            })
        .otherwise({ redirectTo: '/home' });
});



