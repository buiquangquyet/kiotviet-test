class BasePage{
    requestUrl(url){
        browser.url(url);
        return this;
    }
    pause(s=3){
        browser.pause(s*1000);
    }
}
module.exports = BasePage
