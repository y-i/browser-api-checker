const puppeteer = require('puppeteer-core');

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  const channel = process.argv[2];

  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
  });
  const page = await browser.newPage();

  page.on('pageerror', err => {
    console.log(err.message);
  });

  page.on('console', msg => {
    for (let i = 0; i < msg.args().length; ++i) {
      console.log(`${i}: ${msg.args()[i]}`);
    }
  });


  //await page.goto('https://google.com');
  await page.goto(`http://localhost:3000/?channel=${channel}`);
  //await page.screenshot({path: 'example.png'});

  let cnt = 0;
  while (cnt < 60) {
    const title = await page.title();
    if (title === 'End') break;
    ++cnt;
    await sleep(1000);
  }
  console.log('done');

  await browser.close();
})();
