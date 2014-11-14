describe('home', function () {
  beforeEach(function() {
    browser.get('/');
  });

  it('countries', function() {
    var title = element(by.model('title'));

    expect(title.getAttribute('value'))
      .toEqual('Countries');
  });
});
