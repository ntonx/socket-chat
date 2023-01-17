var assert = require('assert');
var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

var driver = new webdriver.Builder()
  .forBrowser('firefox')
  .build();

async function selectChat() {
  driver.get('http://localhost:3000');
  driver.wait(until.titleIs('Sala de Chat'));
  await new Promise(resolve => setTimeout(resolve, 3000));
  driver.findElement(By.name('nombre')).sendKeys('user');
  await new Promise(resolve => setTimeout(resolve, 3000));
  driver.findElement(By.name('sala')).sendKeys("school");
  await new Promise(resolve => setTimeout(resolve, 3000));
  driver.findElement(By.xpath("//button[@type='submit']")).click();
}


selectChat();

(async function sendMessage() {
  
  try {
    
    await driver.wait(until.elementLocated(By.xpath("//input[@id='txtMensaje']")), 10000);
    let element = await driver.findElement(By.xpath("//input[@id='txtMensaje']"));
    await new Promise(resolve => setTimeout(resolve, 2000));
    element.sendKeys("hello world!");
    await new Promise(resolve => setTimeout(resolve, 2000));
    await driver.findElement(By.css(".fa")).click();
    await new Promise(resolve => setTimeout(resolve, 2000));
  } finally {
    await driver.quit();
    console.log("Test process done");
  }
})();

