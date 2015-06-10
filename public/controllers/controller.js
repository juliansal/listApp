var app = angular.module('myApp', []);

app.controller('appCtrl', function($scope, $http) {
	console.log("Hello from the controller");
	
	var refresh = function() {
		$http.get('/contactlist').success(function(response) {
			console.log("Data received");
			$scope.contactlist = response;
			$scope.contact = "";
		});
	};
	
	refresh();
	
	$scope.addContact = function() {
		var contact = $scope.contact;
		console.log(contact);
		$http.post('/contactlist', contact)
		.success(function(response) {
			console.log(response);
			refresh();
		});
	};
	
	$scope.remove = function(id) {
		console.log(id);
		$http.delete('/contactlist/' + id)
		.success(function() {
			refresh();
		});
	};
	
	$scope.edit = function(id) {
		console.log(id);
		$http.get('/contactlist/' + id)
		.success(function(response) {
			$scope.contact = response;
			toggleUpdate();
		});
	};
	
	$scope.update = function() {
		if ($scope.contact != "") {
			console.log($scope.contact._id);
			$http.put('/contactlist/' + $scope.contact._id, $scope.contact)
			.success(function(response) {
				refresh();
				toggleUpdate();
			});
		}
		else {
			refresh();
			alert("Please choose a contact to edit first");
		}
	};
	
	$scope.deselct = function() {
		$scope.contact = "";
	};
	
	var toggleUpdate = function() {
		var tags = document.getElementsByTagName("button");
		for(i = 0; i < tags.length; i++) {
			if(tags[i].innerHTML === "Update") {
				//remove class disable
				$(tags[i]).toggleClass("disabled");
			}
		}
	};
	
	
});