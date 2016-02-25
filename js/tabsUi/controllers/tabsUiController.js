tabsUi.controller('tabsUicontroller', function($scope, $http) {
	
	$http.get('/json/climbs').success(function(result) {
		$scope.tabsUi = (function () {
			return result.nodes;
		})();
	});

});