import * as homepage from '../../pageObjects/homepage'
import * as menu from '../../pageObjects/menupage'
import * as filterpage from '../../pageObjects/filterpage'
import * as productpage from '../../pageObjects/productpage'

var assert = require('assert');




module.exports = function () {

    this.Given(/^I am on the landing page$/, function(){
    	homepage.gotoPage()
    }), 

   this.Then(/^I can see logo in navigation bar$/, homepage.hasLogo),

   this.When(/^I am viewing product list tops$/, function() {
        menu.burgerMenu()
        menu.mainMenu("Clothing")
        menu.childMenu("Tops")
        // assert.equals(browser.getUrl())

   });

   this.Given(/^I filter the product list$/, function(){
			filterpage.filter();
   });

   this.Given(/^I filter by option "(.*)"$/, function(filterOption){
    		filterpage.firstLevelFilter(filterOption)
   });

     this.Given(/^I select colour '(.*)'$/, function(filterOption){
    		filterpage.secondLevelFilter(filterOption)
   });

	this.Given(/^I apply these filters$/, function(filterOption){
    		filterpage.applyFilter()
   });

	this.Given(/^I clear all filters$/, function(){
    		filterpage.clearFilter()
   });

 	this.Then(/^Filter button has (.*) filter$/, function(filterCount){
			var count = filterpage.filterCount();
			// console.log(count)
   });

 	this.Then(/^Filter button has no filters$/, function(){
			var count = filterpage.filterCount();
			// console.log(' no filter ' + count);
   });

 	this.Then(/^Filter returns a product list$/, function(){
			var product = productpage.getProducts();
			// console.log('getProducts', product);
   });
         
}