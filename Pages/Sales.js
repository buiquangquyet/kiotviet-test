const BasePage = require('./BasePage');
class Sales extends BasePage {

    constructor() {
        super();
        //this.pause(6);
    }

    getTitle(){
        $("body > div.mainWrap > section > section > div > div.dashboardLeft > div.dashboardBox.dashboardStatistic.ovh.dashboard-top > div.dashboardTitle.ng-binding").waitForDisplayed({timeout:30000});
        return browser.getTitle();
    }

    addCustomer(name = 'quy'){
        $('.fa-search').waitForDisplayed({timeout:20000})
        this.pause(6);
        $("#customerSearchInput").click();
        this.pause(1);
        $("#customerSearchInput").setValue(name);
        this.pause(1);
        $("body > div:nth-child(2) > div > div.wrap-content > div.col-right > div.col-right-content > div.col-right-container > div:nth-child(1) > div.customer-search > customer-search-component > div > div > div > div > div > ul > li").click()
        return this;
    }

    checkDelivery(){

        var selector = $("#delivery");
        $("#delivery").isSelected(selector, function(err, isSelected) {
            if(isSelected) {
                $("#delivery").click(selector);
            }
        });

        //$("#delivery").click();
        return this;
    }

    addToCart(){
        $("#productListWrapper > ks-swiper-container > div > div.swiper-wrapper > div.swiper-slide.swiper-slide-active > ul > li:nth-child(1) > a").click();
        $("#productListWrapper > ks-swiper-container > div > div.swiper-wrapper > div.swiper-slide.swiper-slide-active > ul > li:nth-child(2) > a").click();
        return this;
    }

    createOrder(){
        $("#saveTransaction").click();
    }

    cancelPrint(){
        this.pause(2);
        $(".cancel-button").click();
        this.pause(2);
        $(".cancel-button").click();
    }



}

module.exports = new Sales();
