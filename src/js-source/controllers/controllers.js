"use strict";
angular.module("controllers", [])

.controller("HomeController", function($scope,trezoService,$state,$stateParams){

	$scope.date = {
		header: moment().format('h:mm A'),
		horaContent: moment().format('h:mm'),
		diaSemana: moment().format('dddd'),
		dia: moment().format('D'),
		mes: moment().format('MMMM')
	};

	$scope.goDetails = function(){
		$state.go('details');
	}

})

.controller("DetailsController", function($scope,trezoService,$state,$stateParams,$mdDialog){

	$scope.horaHeader = moment().locale('en').format('LT');

	$scope.backHome = function(){
		$state.go('home');
	}
	$scope.setLoadOff = false;
  trezoService.getContactOne().then(function(response){
			$scope.setLoadOff = true;
    	$scope.user = response;
  });


});
