const fs = require('fs');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const baseURL = 'https://developer.mozilla.org';
const sleep = async ms => new Promise(resolve => setTimeout(resolve, ms));

/*
def get_api_path_list():
    url = 'https://developer.mozilla.org/en-US/docs/Web/API'
    res = requests.get(url)
    soup = BeautifulSoup(res.text, 'html.parser')
    api_list = soup.find_all('span', class_='indexListTerm')
    return list(map(lambda e: e.a.get('href'), api_list))
*/

// .prototype.の一覧だけ送ってJSONにあててJSON作成するのはCF側が良いのでは

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

    const dest = fs.createWriteStream(`out/check-${APIName}.js`, 'utf8');
    dest.write('p = \'Properties\'\n');
    dest.write('m = \'Methods\'\n');
    dest.write('e = \'Events\'\n');
    dest.write(`b = typeof ${APIName} !== 'undefined'\n`);
    dest.write('o = {}\n');
    dest.write('o[p] = {}\n');
    dest.write('o[m] = {}\n');
    dest.write('o[e] = {}\n');

    const liList = window.document.querySelectorAll('#quick-links li');
    let isHaveSomeElement = false;
    for (let li of liList) {
        const type = li.querySelector('details > summary');
        if (type === null) continue;
        for (let child of li.querySelectorAll('details > ol > li > a > code')) {
            const rawName = child.textContent;
            let name;
            switch(type.textContent) {
                case 'Properties':
                    name = rawName;
                    isHaveSomeElement = true;
                    break;
                case 'Methods':
                    name = rawName.replace('()', '');
                    isHaveSomeElement = true;
                    break;
                case 'Events':
                    name = `on${rawName}`;
                    isHaveSomeElement = true;
                    break;
            }
            if (name === undefined) continue;
            dest.write(`o['${type.textContent}']['${name}'] = ${APIName}.prototype.hasOwnProperty('${name}')\n`)
        }
    }
}

(async () => {
    for (let path of await getAPIpathList()) {
        console.log(path);
        getAPIList(path);
        await sleep(50);
    }
})();