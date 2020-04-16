const BasePage = require('./BasePage');
class DashBoard extends BasePage {
    getTitle(){
        $("body > div.mainWrap > section > section > div > div.dashboardLeft > div.dashboardBox.dashboardStatistic.ovh.dashboard-top > div.dashboardTitle.ng-binding").waitForDisplayed({timeout:30000});
        return browser.getTitle();
    }
}

module.exports = new DashBoard();
