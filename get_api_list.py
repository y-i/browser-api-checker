#!/usr/bin/env python

from bs4 import BeautifulSoup
import os
import requests

base_url = 'https://developer.mozilla.org'

def get_api_path_list():
    url = 'https://developer.mozilla.org/en-US/docs/Web/API'
    res = requests.get(url)
    soup = BeautifulSoup(res.text, 'html.parser')
    api_list = soup.find_all('span', class_='indexListTerm')
    return list(map(lambda e: e.a.get('href'), api_list))

def get_api_list_from_mdn(path):
    url = f'{base_url}{path}'
    res = requests.get(url)
    soup = BeautifulSoup(res.text, 'html.parser')

    api_name = path.split('/')[-1]
    file_name = f'out/{api_name}-props-methods.js'

    print(api_name)

    li_list = soup.find_all('li')
    f = open(file_name, 'w')
    f.write(f'tmp = {{}}\n')
    f.write(f'tmp[\'property\'] = {{}}\n')
    f.write(f'tmp[\'method\'] = {{}}\n')
    for li in li_list:
        if not li.a:
            continue
        if not li.a.strong:
            continue
        if li.a.strong.string == 'Properties':
            for elem in li.ol.find_all('li'):
                if '[' in elem.a.code.string:
                    continue
                # print(elem.a.code.string)
                property_name = elem.a.code.string
                f.write(f'tmp[\'property\'][\'{property_name}\'] = typeof {api_name} !== \'undefined\' && typeof {api_name}.prototype !== \'undefined\' && {api_name}.prototype.hasOwnProperty(\'{property_name}\')')
                f.write('\n')
        if li.a.strong.string == 'Methods':
            for elem in li.ol.find_all('li'):
                if '[' in elem.a.code.string:
                    continue
                # print(elem.a.code.string)
                method_name = elem.a.code.string.replace("()", "")
                f.write(f'tmp[\'method\'][\'{method_name}\'] = typeof {api_name} !== \'undefined\' && typeof {api_name}.prototype !== \'undefined\' && {api_name}.prototype.hasOwnProperty(\'{method_name}\')')        
                f.write('\n')
        # eventsはうまく取れないのでパス
        # if li.a.strong.string == 'Events':
        #     for elem in li.ol.find_all('li'):
        #         print(elem.a.code.string)
    f.write(f'result[\'{api_name}\'] = tmp\n')
    f.close()
    if len(open(file_name).readlines()) == 4:
        os.remove(file_name)

if __name__ == '__main__':
    for api_path in get_api_path_list():
        get_api_list_from_mdn(api_path)