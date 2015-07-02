(function(){
	angular.module('contactList').controller('contactListController',contactListController);

	function contactListController ($scope,$http) {
		$http.get('/contactlist').success(function  (response) {
			$scope.contactlist = response;
		});
		

	};
})();