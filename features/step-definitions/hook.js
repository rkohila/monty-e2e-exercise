module.exports = function() {

 this.Before(function(scenario) {
        // console.log('Hook - before ');
    });

    // Close the browser after each scenario
    this.After(function(scenario) {
    	        // console.log('Hook  - after ');

        // this.browser.exit();
       
    });
};