const BasePage = require('./BasePage');
class Invoices extends BasePage {
    waitPageLoad(){
        //$("body > div.mainWrap > section > section > section.mainLeft.fll.ng-scope > h1 > span").waitForDisplayed({timeout:30000});
        browser.waitUntil({ timeout:30000})
    }
}
module.exports = new Invoices();
