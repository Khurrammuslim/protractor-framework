let homepage = require('../pages/homepage');

describe('Calc Demo', function() {
    it('add test', function() {
      //browser.get('http://juliemr.github.io/protractor-demo/');

      homepage.get('http://juliemr.github.io/protractor-demo/');
      //element(by.model('first')).sendKeys('2');
      //element(by.model('second')).sendKeys('1');
      //element(by.css('[ng-click="doAddition()"]')).click();

      homepage.enterNumber('2','7');
      homepage.clickGo();
      homepage.verifyResult('9');

      //let result = element(by.cssContainingText('.ng-binding', '3'))

      //expect(result.getText()).toEqual('3');

      browser.sleep(2000)
    })

    it('sub test', function() {
      //browser.get('http://juliemr.github.io/protractor-demo/');

      homepage.get('http://juliemr.github.io/protractor-demo/');
      //element(by.model('first')).sendKeys('2');
      //element(by.model('second')).sendKeys('1');
      //element(by.css('[ng-click="doAddition()"]')).click();

      homepage.enterNumber('2','7');
      homepage.clickGo();
      homepage.verifyResult('10');

      //let result = element(by.cssContainingText('.ng-binding', '3'))

      //expect(result.getText()).toEqual('3');

      browser.sleep(2000)
    })
  })