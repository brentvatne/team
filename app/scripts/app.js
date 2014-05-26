'use strict';

angular
  .module('teamApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('TeamMembers', [
    { name: 'Brad Ediger',
      github: 'bradediger',
      email: 'brad.ediger@madriska.com',
      location:
        { name: 'Chicago, IL',
          id: 'chicago',
          lat: '41.878114',
          lon: '-87.629798',
          tz: 'America/Chicago' } },

    { name: 'Jordan Byron',
      github: 'jordanbyron',
      email: 'jordan.byron@madriska.com',
      location:
        { name: 'New Haven, CT',
          id: 'new-haven',
          lat: '41.308274',
          lon:'-72.927883',
          tz: 'America/New_York' } },

    { name: 'Brent Vatne',
      github: 'brentvatne',
      email: 'brentvatne@gmail.com',
      location:
        { name: 'Vancouver, BC',
          id: 'vancouver',
          lat: '49.261361',
          lon:'-123.111484',
          tz: 'America/Vancouver' } }
  ])
