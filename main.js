
// var foodieApp = angular.module('foodieApp',[]);
	var foodieApp = angular.module('foodieApp',['ngRoute']);
	foodieApp.config(function ($routeProvider) {
		$routeProvider
		.when('/',{
			templateUrl: 'pages/login.html',
			controller: 'loginController'
		})
		.when('/home',{
			templateUrl: 'pages/main.html',
			controller: 'mainController'
		})
		.when('/restaurant/:url',{
			templateUrl:'pages/restaurant.html',
			controller:'restaurantController'
		})
	})

foodieApp.controller('restaurantController',function($scope,$routeParams,$http){
 $scope.restaurantId = $routeParams.url;
 var restaurants = [{
 name: 'Farzi Cafe',
 address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
 location: 'Connaught Place',
 category: 'Casual Dining, Bar',
 ratings: '4.2',
 cuisines: 'Modern Indian,chineese',
 cost: '2200',
 hours: '12 Noon to 1 AM (Mon-Sun)',
bestDish: {
	name: 'Corn Pizza',
	image: '2.jpg'
},
 image: '1.jpg'
},{
 name: 'Circus',
 address: '38/39, Level 1, Block E , Outer Circle, Soth Extension Place',
 location: 'South Extension Two',
 category: 'Casual Dining',
 ratings: '4.2',
 cuisines: 'Asian,Chineese,Italian',
 cost: '3000',
 hours: '12 Noon to 1 AM (Mon-Sun)',
 image: '2.jpg'
},{
 name: 'Baahar Cafe',
 address: '38/39, Level 1, Block E , Inner Circle, Hyderabad',
 location: 'Hyderabad',
 category: 'Casual Dining, Bar',
 ratings: '4.2',
 cuisines: 'Modern Indian',
 cost: '1000',
 hours: '12 Noon to 1 AM (Mon-Sun)',
 image: '3.jpg'
},{
 name: 'Swaad',
 address: '38/39, Level 1, Block D , Inner Circle, Hyderabad',
 location: 'Hyderabad',
 category: 'Casual Dining',
 ratings: '4.2',
 cuisines: 'Modern Indian,Chineese',
 cost: '2200',
 hours: '12 Noon to 1 AM (Mon-Sun)',
 image: '4.jpg'
},{
 name: 'Swaagth',
 address: '38/39, Level 1, Block C , Inner Circle,Mumbai',
 location: 'Mumbai',
 category: 'Casual Dining, Bar',
 ratings: '4.2',
 cuisines: 'Italian,Thalli',
 cost: '2200',
 hours: '12 Noon to 1 AM (Mon-Sun)',
 image: '5.jpg'
}]
 $scope.restaurant =restaurants[$routeParams.url-1];
 	$scope.ingredients = [];
 $scope.getIngredients = function(url) {
// ajax call
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	$http({
		'method': 'POST',
	'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
	'headers': {
		'Authorization': 'Key YOUR_API_KEY',
		'Content-Type': 'application/json'
	},
		'data': data,
}).then(function (response) {
		var ingredients = response.data.outputs[0].data.concepts;
		//console.log(ingredients);
			for (var i =0;i < ingredients.length;i++) {
			$scope.ingredients.push(ingredients[i].name);
		//	console.log($scope.ingredients);
			}
    }, function (xhr) {
		    	console.log(xhr);
		    });

}
})

foodieApp.controller('loginController',function($scope,$location) {
	$scope.goToHome = function(){
	$location.url('home')
	}

})

foodieApp.controller('mainController',function($scope) {
	//$scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna'];
	$scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	ratings: '4.2',
	cuisines: 'Modern Indian,chineese',
	cost: '2200',
	id:1,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: '1.jpg'
},{
	name: 'Circus',
	address: '38/39, Level 1, Block E , Outer Circle, Soth Extension Place',
	location: 'South Extension Two',
	category: 'Casual Dining',
	ratings: '4.2',
	cuisines: 'Asian,Chineese,Italian',
	cost: '3000',
	id:2,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: '2.jpg'
},{
	name: 'Baahar Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Hyderabad',
	location: 'Hyderabad',
	category: 'Casual Dining, Bar',
	ratings: '4.2',
	cuisines: 'Modern Indian',
	cost: '1000',
	id:3,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: '3.jpg'
},{
	name: 'Swaad',
	address: '38/39, Level 1, Block D , Inner Circle, Hyderabad',
	location: 'Hyderabad',
	category: 'Casual Dining',
	ratings: '4.2',
	cuisines: 'Modern Indian,Chineese',
	cost: '2200',
	id:4,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: '4.jpg'
},{
	name: 'Swaagth',
	address: '38/39, Level 1, Block C , Inner Circle,Mumbai',
	location: 'Mumbai',
	category: 'Casual Dining, Bar',
	ratings: '4.2',
	cuisines: 'Italian,Thalli',
	cost: '2200',
	id:5,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: '5.jpg'
}]
})
