const BasePage = require('./BasePage');
class Login extends BasePage {
    setUserName(userName){
        $('#UserName').setValue(userName);
        return this;
    }

    setPassword(pass){
        $('#Password').setValue(pass);
        return this;
    }

    clickLogin(){
        $("body > div > form > section > section.lgBtn > span:nth-child(1) > input[type=submit]").click();
        return this;
    }

}

module.exports = new Login();
