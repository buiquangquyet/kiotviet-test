const BasePage = require('./BasePage');
class Sales extends BasePage {

    getTitle(){
        $("body > div.mainWrap > section > section > div > div.dashboardLeft > div.dashboardBox.dashboardStatistic.ovh.dashboard-top > div.dashboardTitle.ng-binding").waitForDisplayed({timeout:30000});
        return browser.getTitle();
    }

    addCustomer(){
        $('.fa-search').waitForDisplayed({timeout:20000})
        this.pause(5);
        $("#customerSearchInput").click();
        this.pause(1);
        $("#customerSearchInput").setValue('quyet');
        this.pause(1);
        $("body > div:nth-child(2) > div > div.wrap-content > div.col-right > div.col-right-content > div.col-right-container > div:nth-child(1) > div.customer-search > customer-search-component > div > div > div > div > div > ul > li").click()
        this.pause(50)
        return this;
    }
}

module.exports = new Sales();
