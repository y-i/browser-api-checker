const { writeFile } = require('fs');
const { promisify } = require('util');

const { Builder, By, Key, promise, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

promise.USE_PROMISE_MANAGER = false;

const options = new firefox.Options()
  .setBinary(`/usr/bin/firefox`)
  .addArguments("-headless");

const driver = new Builder()
  .forBrowser('firefox')
  .setFirefoxOptions(options)
  .build();

(async () => {
  const channel = process.argv[2];
  await driver.get(`http://localhost:3000/?channel=${channel}`);
  await driver.wait(until.titleIs('End'));
  await driver.quit();
})();
