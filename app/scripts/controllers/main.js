'use strict';

angular.module('teamApp')
  .controller('MainCtrl', function ($scope, $timeout, TeamMembers, City) {
    $timeout(function() {
      $('[data-toggle=tooltip]').tooltip();
    }, 500);

    $scope.teamMembers = TeamMembers;
    $scope.cities = _.map(
      _.groupBy($scope.teamMembers, function(teamMember) { return teamMember.location.name }),
      function(teamMembers) {
        return new City(teamMembers[0].location, teamMembers);
      }
    )

    angular.forEach($scope.cities, function(city, i) {
      city.getForecast().then(function(response) {
        city.setForecast(response.data);
      });
    });
  });
