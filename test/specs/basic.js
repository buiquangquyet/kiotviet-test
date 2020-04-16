const assert = require('assert')
const Login = require('../../Pages/Login.js')
const DashBoard = require('../../Pages/DashBoard.js')
describe('webdriver.io page', () => {
    it('should have the right title', () => {
        Login.requestUrl('https://delivery.kvpos.com:59918/')
        .setUserName('admin')
        .setPassword('123')
        .clickLogin();


        var title = DashBoard.getTitle();
        assert.strictEqual(title, 'KiotViet - Tổng quan')

        DashBoard.pause(3);




        // const title = browser.getTitle()
        // assert.strictEqual(title, 'WebdriverIO · Next-gen browser automation test framework for Node.js')
    })
})
