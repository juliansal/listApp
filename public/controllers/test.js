/*
var myApp = angular.module('myApp', []);

myApp.controller('appCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
}]);
*/

var myApp = angular.module('myApp', []);

myApp.controller('appCtrl', function() {
  console.log("Hello Worlds!");
});


	person1 = {
		name: 'Time',
		email: 'time@email.com',
		number: '(111) 111-1111'
	};
	person2 = {
		name: 'Emily',
		email: 'emily@email.com',
		number: '(222) 555-1111'
	};
	person3 = {
		name: 'Joan',
		email: 'Joan@email.com',
		number: '(333) 555-1111'
	};

	var contactlist = [person1, person2, person3];
	res.json(contactlist);