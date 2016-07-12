var mainApp = angular.module("mainApp", ['ngRoute', 'ngResource']);
mainApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/addUser', {
		templateUrl: 'register.htm',
		controller: 'adduserController'
		}).when('/viewUser', {
			templateUrl: 'view.htm',
			controller: 'viewController'
		}).otherwise({
			redirectTo: '/addUser'
		});
 
	}]);

mainApp.controller('adduserController', ['$scope', '$resource', '$window', function($scope, $resource, $window){
	$scope.members=[];
	var Meetup=$resource('/api/meetups');
	$scope.addUsr=function(){
		var meetup=new Meetup();
		meetup.username=$scope.user.name;
		meetup.mail=$scope.user.mail;
		meetup.pass=$scope.user.pass;
		meetup.$save(function(result){
			$scope.members.push(result);
			$scope.user={};
			 window.location.href = "#viewUser";
		});

	}
}]);


mainApp.controller('viewController', ['$scope', '$resource', function($scope, $resource){
	var Meetup=$resource('/api/meetups');
	Meetup.query(function(results){
		$scope.members=results;
		console.log($scope.members);
	});

	$scope.edit=function(indx, us){
		console.log(us);
	}
	
}]);