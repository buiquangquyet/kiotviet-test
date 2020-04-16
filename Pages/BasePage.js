class BasePage{
    constructor() {
        browser.waitUntil({ timeout:30000});
        this.pause(1)
    }
    requestUrl(url){
        browser.url(url);
        return this;
    }
    pause(s=3){
        browser.pause(s*1000);
    }
}
module.exports = BasePage
