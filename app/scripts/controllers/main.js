'use strict';

angular.module('teamApp')
  .controller('MainCtrl', function ($scope, TeamMembers, City) {
    $scope.teamMembers = TeamMembers;
    $scope.cities = _.map(
      _.groupBy($scope.teamMembers, function(teamMember) { return teamMember.location.name }),
      function(teamMembers) {
        return new City(teamMembers[0].location, teamMembers)
      }
    )
  });
