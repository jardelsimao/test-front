"use strict";

angular.module("services", [])

.factory('trezoService', function(Restangular) {

	var _getContactOne = function(){
		return Restangular.one('users', 'jardelsimao').get();
	};

	return {

		getContactOne: _getContactOne,

	}

})
