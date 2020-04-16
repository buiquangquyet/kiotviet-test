const assert = require('assert')
const Login = require('../../Pages/Login.js')
const DashBoard = require('../../Pages/DashBoard.js')
const Invoices = require('../../Pages/Invoices.js')
const Sales = require('../../Pages/Sales.js')
describe('webdriver.io page', () => {
    it('create order',function () {
        Login.requestUrl('https://delivery.kvpos.com:59918/')
            .setUserName('admin')
            .setPassword('123')
            .clickLoginSale();
        Sales.addCustomer();
        Sales.pause(30)

    })

    // it('should have the right title', () => {
    //     Login.requestUrl('https://delivery.kvpos.com:59918/')
    //     .setUserName('admin')
    //     .setPassword('123')
    //     .clickLogin();
    //     var title = DashBoard.getTitle();
    //     assert.strictEqual(title, 'KiotViet - Tổng quan')
    //     Invoices.requestUrl('https://delivery.kvpos.com:59918/#/Invoices').pause(3);
    //     // const title = browser.getTitle()
    //     // assert.strictEqual(title, 'WebdriverIO · Next-gen browser automation test framework for Node.js')
    // })
})
