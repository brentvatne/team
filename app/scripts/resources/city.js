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
      return moment().tz(this.tz).format('h:mm a');
    }

    City.prototype.temperature = function() {
      return this.getForecast().temperature;
    }

    City.prototype.weatherIcon = function() {
      return this.getForecast().icon;
    };

    City.prototype.getForecast = function() {
      return {temperature: '15', icon: 'cloudy.png'}
      // make request to forecast.io
    };

    return City;
  })
