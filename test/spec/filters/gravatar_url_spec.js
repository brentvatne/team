'use strict';

describe('gravatarUrl filter', function () {
  beforeEach(module('teamApp'));

  it('returns the url for an email address', inject(function(gravatarUrlFilter) {
    expect(gravatarUrlFilter("brentvatne@gmail.com")).
      toBe('http://www.gravatar.com/avatar/579a528974090c0172cf8cecab01ea26')
  }));

  it('ignores case and whitespace', inject(function(gravatarUrlFilter) {
    expect(gravatarUrlFilter(" brentVATNE@gmail.COM ")).
      toBe('http://www.gravatar.com/avatar/579a528974090c0172cf8cecab01ea26')
  }));
});
