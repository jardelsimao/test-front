"use strict";
angular.module("chalenge", ["ui.router","ngMessages","ngMaterial","controllers","services",'restangular','ngAnimate'])

.config(function($mdThemingProvider,$stateProvider,$sceDelegateProvider,$urlRouterProvider,RestangularProvider){

    $mdThemingProvider.definePalette('amazingPaletteName', {
        '50':   'eceff1',
        '100':  'cfd8dc',
        '200':  'b0bec5',
        '300':  '90a4ae',
        '400':  '78909c',
        '500':  '303030',
        '600':  '424242',
        '700':  '303030',
        '800':  '212121',
        '900':  '607d8b',
        'A100': '546e7a',
        'A200': '455a64',
        'A400': '37474f',
        'A700': '000000',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                            // on this palette should be dark or light

        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
         '200', '300', '400', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
      });

      $mdThemingProvider.theme('default')
        .primaryPalette('amazingPaletteName')

	RestangularProvider.setBaseUrl('https://api.github.com/');

	RestangularProvider.addResponseInterceptor(function(data, operation){
        if (operation === "getList"){
            var newResponse = data.objects;
            return newResponse;
        }
        return data;
    });

	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state("home", {
			url: "/home",
			controller: "HomeController",
			templateUrl: "js/views/home.html",
            data: { transition:'slide-in'}
		})
		.state("details", {
			url: "/details",
			controller: "DetailsController",
			templateUrl: "js/views/details.html",
            data: { transition:'slide-in'},
			params: {
		        id: null
		    }
		});

})
