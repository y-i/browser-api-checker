const { writeFile } = require('fs');
const { promisify } = require('util');

const { Builder, By, Key, promise, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

promise.USE_PROMISE_MANAGER = false;

const options = new firefox.Options()
    // .setBinary(firefox.Channel.NIGHTLY)
    .setBinary(`${process.argv[2]}/firefox`)
    .addArguments("-headless");

const driver = new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(options)
    .build();

(async () => {
    await driver.get('http://host.docker.internal:8887/index.html');
    await driver.wait(until.titleIs('Finished'));
    await driver.quit();
})();
  