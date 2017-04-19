
module.exports = {

filter : function(){
	browser.pause(500);
	browser.click("//div[@class='Filters-column Filters-refineButtonContainer']/button")
},

clearFilter : function(){
	browser.click('.Refinements-clearButton')
},

firstLevelFilter : function(firstFilter) {	
	// browser.click('//div[@class="RefinementList-accordionHeader"]/span[@style="outline:none;"][contains(text(),"'+firstFilter+'")]')	
	// var colourElements =  browser.elements('//header[@class="Accordion-title"]/div/span[contains(text(),"Colour")]');
	// browser.waitForExist('//*[@id="root"]/div/div[2]/div[3]/div/div/div[2]/div[3]/div/div[2]/article[1]/div[1]/header/div/span[1]',500)
	browser.pause(500);
	browser.click('//*[@id="root"]/div/div[2]/div[3]/div/div/div[2]/div[3]/div/div[2]/article[1]/div[1]/header/div/span[1]')
	// browser.click('div.Accordion-header.is-padded > header > div > span.RefinementList-label.is-value')
	// browser.click('div.Accordion-header.is-padded > header > div > span:contains("Colour")');
},

secondLevelFilter : function(secondFilter) {
		browser.pause(500);

		if(secondFilter == 'Black' ){
					browser.click('#root > div > div.Main-body.is-notScrollable > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > article.Accordion.Accordion-groupMember.is-expanded > div.Accordion-wrapper > div > div > div > button:nth-child(1) > span.ValueOption-label')

		}else {
				browser.click('#root > div > div.Main-body.is-notScrollable > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > article.Accordion.Accordion-groupMember.is-expanded > div.Accordion-wrapper > div > div > div > button:nth-child(15)');

		}
	// browser.click('//div/*/button[@role="button"]/span[contains(text(),"'+secondFilter+'")]')	

},

applyFilter : function() {
	browser.click('.Button.Refinements-applyButton')
},

filterCount : function(){
	return browser.getText('//div[@class="Filters-column Filters-refineButtonContainer"]/button/span')
}


}
