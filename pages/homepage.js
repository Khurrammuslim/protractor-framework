let homepage = function() {

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goBtn = element(by.css('[ng-click="doAddition()"]'));


    this.get = function(url){
        browser.get(url);
    }

    this.enterNumber = function(firstNo,SecondNo) {

        firstNumber_input.sendKeys(firstNo);
        secondNumber_input.sendKeys(SecondNo);
    };

    this.clickGo = function(){

        goBtn.click();
    };

    this.verifyResult = function(result){

        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);

    };  

};

module.exports = new homepage();