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
      return this.getForecast().temperature;
    }

    City.prototype.weatherIcon = function() {
      return this.getForecast().icon;
    };

    City.prototype.forecastApiUrl = function() {
      // var baseUrl = "https://api.forecast.io/forecast/", url;
      // url = baseUrl + '4997584fedd1b81ac2d4941658dddc69';
      // return url + this.lat + ',' + this.lon;
    }

    City.prototype.getForecast = function() {
      // $http.get(this.forecastApiUrl()).then(function(data) {

      // });
      return {temperature: '15', icon: 'cloudy'}
    };

    return City;
  })
