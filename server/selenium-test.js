var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
 
test.describe('Verify testing process with Selenium', function() {
  test.it('test case should work', function() {
    var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox()).
    build();
driver.get('http://localhost:3000');
    var nameBox = driver.findElement(webdriver.By.name('nombre'));
    nameBox.sendKeys('User1');
    
    var roomBox = driver.findElement(webdriver.By.name('sala'));
    roomBox.sendKeys('Room1');
 
    var button = driver.find_element_by_class_name("btn btn-block btn-lg btn-info btn-rounded");
    button.click();
    driver.quit();
  });
});
