'use strict';

angular.module('teamApp')
  .factory('City', function ($http) {
    function City(options, teamMembers) {
      this.name = options.name;
      this.tz = options.tz;
      this.lon = options.lon;
      this.lat = options.lat;
      this.id = options.id;
      this.teamMembers = teamMembers;
    }

    City.prototype.localTime = function() {
      return moment().tz(this.tz).format('h:mm a').toUpperCase();
    }

    City.prototype.temperature = function() {
      return this.temperature;
    }

    City.prototype.weatherIcon = function() {
      return this.icon;
    };

    City.prototype.forecastApiUrl = function() {
      var baseUrl = "http://team-forecast.herokuapp.com/";
      return baseUrl + this.lat + ',' + this.lon + "?callback=JSON_CALLBACK";
    }

    City.prototype.getForecast = function() {
      return $http.jsonp(this.forecastApiUrl());
    };

    City.prototype.setForecast = function(options) {
      this.temperature = Math.round(options['temperature']);
      this.icon = options['conditions'];
    };

    return City;
  })
