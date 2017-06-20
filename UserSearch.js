var weather = require("weather-js");

var UserTypeF = require("./cli.js");
var weatherAdmin = require("./WeatherAdmin.js"); 

var UserSearch = function(userName, location) {
	this.userName = userName; 
	this.location = location; 
	this.date = Date.now(); 
	this.getWeather = function() {
		weather.find({ search: this.location, degreeType: "F" }, function(err, result) {
			if (err) console.log("There was an Error:" + err); 
			console.log(JSON.stringify(result, null, 2)); 
		}); 
	}
}

// var newSearch = new UserSearch("Nick", "Somerset, NJ"); 

// newSearch.getWeather(); 

module.exports = UserSearch; 


