const BasePage = require('./BasePage');
class Sales extends BasePage {

    getTitle(){
        $("body > div.mainWrap > section > section > div > div.dashboardLeft > div.dashboardBox.dashboardStatistic.ovh.dashboard-top > div.dashboardTitle.ng-binding").waitForDisplayed({timeout:30000});
        return browser.getTitle();
    }

    addCustomer(){
        $('.fa-search').waitForDisplayed({timeout:20000})
        $("#customerSearchInput").setValue('quyet');
        this.pause(50)
        return this;
    }
}

module.exports = new Sales();
