'use strict';

angular.module('teamApp')
  .factory('City', function ($http) {

    // Initialize the city via new City({}, [{}, {}])
    //
    function City(options, teamMembers) {
      this.name = options.name;
      this.tz = options.tz;
      this.lon = options.lon;
      this.lat = options.lat;
      this.id = options.id;
      this.teamMembers = teamMembers;
    }

    // Returns current local time, eg: 5:00 PM
    //
    City.prototype.localTime = function() {
      return moment().tz(this.tz).format('h:mm a').toUpperCase();
    }

    City.prototype.temperature = function() { return this.temperature; }
    City.prototype.weatherIcon = function() { return this.icon; };

    // Build url pointing to our custom weather api endpoint
    //
    City.prototype.forecastApiUrl = function() {
      var baseUrl = "http://team-forecast.herokuapp.com/";
      return baseUrl + this.lat + ',' + this.lon + "?callback=JSON_CALLBACK";
    }

    // Make request to our custom weather endpoint and return a promise
    //
    City.prototype.getForecast = function() {
      return $http.jsonp(this.forecastApiUrl());
    };

    // Update the temperature and conditions icon based
    //
    City.prototype.setForecast = function(options) {
      this.temperature = Math.round(options['temperature']);
      this.icon = options['conditions'];
    };

    return City;
  })
