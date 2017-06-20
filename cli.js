var UserSearch = require("./UserSearch.js"); 

var fs = require("fs"); 
var weather = require("weather-js");  

var userSearch = require("./UserSearch.js"); 
var weatherAdmin = require("./WeatherAdmin.js"); 

var userType = process.argv[2]; 
var userName = process.argv[3]; 
var location = process.argv[4]; 

	switch (userType) {
		case "user":
			user();  
			break;

		case "admin":
			admin(); 
			break; 

		default: 
			console.log("Select User or Admin"); 
	}

	function user() {
		var user = new UserSearch(userName, location); 
		console.log(user);  
	}; 

	function admin() {
		var admin = new WeatherAdmin(userName, location); 
	}; 
