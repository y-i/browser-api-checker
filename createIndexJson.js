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

    const dest = fs.createWriteStream(`out/check-${APIName}.json`, 'utf8');    
    const data = {
        'Properties': {},
        'Methods': {},
        'Events': {},
    };

    const liList = window.document.querySelectorAll('#quick-links li');
    let isHaveSomeElement = false;
    for (let li of liList) {
        const type = li.querySelector('details > summary');
        if (type === null) continue;
        for (let child of li.querySelectorAll('details > ol > li')) {
            if (child.querySelector('a > code') === null) continue;
            const rawName = child.querySelector('a > code').textContent;
            const isExperimental = child.querySelector('i.icon-beaker') !== null;
            const isDeprecated = child.querySelector('icon-thumbs-down-alt') !== null;
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
            data[type.textContent][name] = {
                isDeprecated,
                isExperimental,
            };
            // deprecated
        }
    }
    dest.write(JSON.stringify(data));
    dest.end();
}

(async () => {
    for (let path of await getAPIpathList()) {
        if (path.indexOf('RTCPeerConnection') === -1) continue;
        console.log(path);
        getAPIList(path);
        await sleep(50);
        break;
    }
})();