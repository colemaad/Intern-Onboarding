describe('html testing', function() {
  beforeEach(function() {
    browser.get('http://127.0.0.1:8080/#/users');
  });
  describe('tests for ng-show and ng-hide', function() {
    expect(element(by.id('hello')).isPresent()).toBe(true);



		});


});
