const fs = require('fs');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const baseURL = 'https://developer.mozilla.org';
const sleep = async ms => new Promise(resolve => setTimeout(resolve, ms));

const getAPIpathList = async () => {
  const url = `${baseURL}/en-US/docs/Web/API`;
  const {window} = await JSDOM.fromURL(url);

  const APIList = window.document.querySelectorAll('span.indexListTerm>a[href^="/en-US/docs/Web/API/"]');
  console.log(APIList.length)
  return Array.from(APIList).map(elem => elem.getAttribute('href'));
};

const getAPIList = async subDir => {
  const APIName = subDir.split('/').slice(-1)[0];
  const url = `${baseURL}${subDir}`;
  const {window} = await JSDOM.fromURL(url);

  const obj = {
    name: APIName,
    properties: [],
    methods: [],
    events: [],
  }

  const liList = window.document.querySelectorAll('.quick-links > div > ol > li');
  let isHaveSomeElement = false;
  for (let li of liList) {
    const type = li.querySelector('details > summary');
    if (type === null) continue;
    for (let child of li.querySelectorAll('details > ol > li a > code')) {
      const rawName = child.textContent;
      switch(type.textContent) {
        case 'Properties': {
          const name = rawName;
          isHaveSomeElement = true;
          obj.properties.push(name);
          break;
        }
        case 'Methods': {
          const name = rawName.replace('()', '');
          isHaveSomeElement = true;
          obj.methods.push(name);
          break;
        }
        case 'Events': {
          //const name = `on${rawName}`;
          const name = rawName;
          isHaveSomeElement = true;
          obj.events.push(name);
          break;
        }
      }
    }
  }
  const dest = fs.createWriteStream(`out/check-${APIName}.json`, 'utf8');
  dest.write(JSON.stringify(obj, null, '\t'));
}

(async () => {
  const APIList = await getAPIpathList();

  const APINames = APIList.map(name => name.split('/').slice(-1)[0]);
  const dest = fs.createWriteStream(`out/APIList.json`, 'utf8');
  dest.write(JSON.stringify(APINames, null, '\t'));

  for (let path of APIList) {
    console.log(path);
    getAPIList(path);
    await sleep(50);
  }
})();