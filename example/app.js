angular.module('ngApp', ['localytics.directives'])
.controller('ChosenDemoCtrl', ['$scope', function($scope) {
	$scope.allOptions = ['Ha noi', 'Ho chi minh', 'Da nang']
}]);