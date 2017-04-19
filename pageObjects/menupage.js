var assert = require('assert')


module.exports = {

burgerMenu : function(){
	 browser.click('.BurgerButton') 
},

mainMenu : function(mainMenuItem){
	browser.pause(500);
	browser.waitForExist('//div/button[contains(text(),"'+mainMenuItem+'")]',500)
	browser.click('//div/button[contains(text(),"'+mainMenuItem+'")]')	
},

childMenu : function(childMenuItem){
	browser.pause(500);
	browser.waitForExist('//div/a[contains(text(),"'+childMenuItem+'")]',500)
	browser.click('//div/a[contains(text(),"'+childMenuItem+'")]')
},

appUrl : function(){
 	console.log(browser.getUrl())
}

}
