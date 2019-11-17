import {APIInterface, check} from './checker';

interface HasPrototype extends Object {
  prototype: any;
}

const host = 'http://localhost:3000';

(async () => {
  console.log('Start.');

  const json = await fetch(`${host}/json/APIList.json`).then(res => res.json());
  console.log('JSON fetch finished');

  const obj: {[index: string]: APIInterface | null} = {};
  for (const name of json) {
    const isAPIAvailabe = window[name] !== undefined && (<HasPrototype>(<Object>window[name])).prototype !== undefined;
    if (!isAPIAvailabe) {
      obj[name] = null;
      continue;
    }

    const apiObj = await fetch(`${host}/json/check-${name}.json`).then(res => res.json());
    const result = check(apiObj);
    obj[name] = result;
  }
  console.log('checker finished');

  const channel = decodeURIComponent(location.search.match(/channel=(.*?)(&|$)/)[1]);
  let ua;
  if (window.navigator.userAgent.includes('Firefox')) {
    ua = 'firefox-' + window.navigator.userAgent.match(/Firefox\/(\d+)/)[1];
  } else if (window.navigator.userAgent.includes('Chrome')) {
    ua = 'chrome-' + window.navigator.userAgent.match(/Chrome\/(\d+)/)[1];
  }
  await fetch(`${host}/add?ua=${ua}&channel=${channel}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  console.log('POST fnished');

  document.title = 'End';
})();
