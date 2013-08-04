'use strict';

/* Services */

var cocktailsAppServices = angular.module('cocktailsAppServices', ['ngResource'])
    cocktailsAppServices.factory('Spirit', function ($resource) {
        return $resource('../drinks/:File.json', {}, {
            query: { method: 'GET', params: { File: 'spirits' }, isArray: true }
        });
    });

    cocktailsAppServices.factory('Liqueur', function ($resource) {
        return $resource('../drinks/:File.json', {}, {
            query: { method: 'GET', params: { File: 'liqueurs' }, isArray: true }
        });
    });

    cocktailsAppServices.factory('Champagne', function ($resource) {
        return $resource('../drinks/:File.json', {}, {
            query: { method: 'GET', params: { File: 'champagne' }, isArray: true }
        });
    });

    cocktailsAppServices.factory('Beer', function ($resource) {
        return $resource('../drinks/:File.json', {}, {
            query: { method: 'GET', params: { File: 'beer' }, isArray: true }
        });
    });

    cocktailsAppServices.factory('Cider', function ($resource) {
        return $resource('../drinks/:File.json', {}, {
            query: { method: 'GET', params: { File: 'cider' }, isArray: true }
        });
    });

    cocktailsAppServices.factory('Nonalcoholic', function ($resource) {
        return $resource('../drinks/:File.json', {}, {
            query: { method: 'GET', params: { File: 'none-alcoholics' }, isArray: true }
        });
    });

    cocktailsAppServices.factory('FortifiedWine', function ($resource) {
        return $resource('../drinks/:File.json', {}, {
            query: { method: 'GET', params: { File: 'fortifiedwines' }, isArray: true }
        });
    });

    cocktailsAppServices.factory('Wine', function ($resource) {
        return $resource('../drinks/:File.json', {}, {
            query: { method: 'GET', params: { File: 'wines' }, isArray: true }
        });
    });

    cocktailsAppServices.factory('Ginmixers', function ($resource) {
        return $resource('../drinks/:File.json', {}, {
            query: { method: 'GET', params: { File: 'ginmixers' }, isArray: true }
        });
    });

     cocktailsAppServices.factory('Brandy', function ($resource) {
        return $resource('../drinks/:File.json', {}, {
            query: { method: 'GET', params: { File: 'brandymixers' }, isArray: true }
        });
    });

    cocktailsAppServices.factory('Rum', function ($resource) {
        return $resource('../drinks/:File.json', {}, {
            query: { method: 'GET', params: { File: 'rum' }, isArray: true }
        });
    });

    cocktailsAppServices.factory('Tequila', function ($resource) {
        return $resource('../drinks/:File.json', {}, {
            query: { method: 'GET', params: { File: 'tequila' }, isArray: true }
        });
    });

    cocktailsAppServices.factory('Vodka', function ($resource) {
        return $resource('../drinks/:File.json', {}, {
            query: { method: 'GET', params: { File: 'vodka' }, isArray: true }
        });
    });

    cocktailsAppServices.factory('Whisky', function ($resource) {
        return $resource('../drinks/:File.json', {}, {
            query: { method: 'GET', params: { File: 'whisky' }, isArray: true }
        });
    });
