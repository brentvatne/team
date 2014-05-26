'use strict';

angular.module('teamApp').
  filter('gravatarUrl', function() {
    return function(email) {
      return 'http://www.gravatar.com/avatar/' + md5(email.toLowerCase().trim());
    }
  });
