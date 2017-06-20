var fs = require("fs"); 
//var weather = require("weather-js"); 

var UserSearch = require("./UserSearch.js"); 
//var cli = require("./cli.js"); 

var WeatherAdmin = function() {
	this.newUserSearch = function(name, location) {
		var newSearch = new UserSearch(name, location); 
		newSearch.getWeather();
	};

	this.getData = function() {
		fs.appendFile("log.txt", "\n" + userName + " " + location + newSearch.getWeather() + "\n", function(err) {
			if(err) {
				console.log(err); 
			}
		})
		
		fs.readFile("log.txt", "utf8", function(err, data) {
			if(err) {
				console.log(err); 
			}
			console.log(data); 
		})
	}
};

module.exports = WeatherAdmin; 
