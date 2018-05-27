const chrome66 = require('./result/Chrome%2F66.json');
const chrome68 = require('./result/Chrome%2F68.json');
const ff58 = require('./result/Firefox%2F58.json');
const ff59 = require('./result/Firefox%2F59.json');
const ff60 = require('./result/Firefox%2F60.json');
const ff61 = require('./result/Firefox%2F61.json');

const fs = require('fs');

const result = {};

const pushRow = (data, name) => {
    Object.keys(data).forEach((k1) => {
        Object.keys(data[k1]).forEach((k2) => {
            Object.keys(data[k1][k2]).forEach((k3) => {
                result[k1][k2][k3][name] = data[k1][k2][k3];
            });
        });
    });
};

Object.keys(chrome66).forEach((k1) => {
    result[k1] = {};
    Object.keys(chrome66[k1]).forEach((k2) => {
        result[k1][k2] = {};
        Object.keys(chrome66[k1][k2]).forEach((k3) => {
            result[k1][k2][k3] = {};
            result[k1][k2][k3]['chrome/66'] = chrome66[k1][k2][k3];
        });
    });
});

pushRow(chrome68, 'chrome/68');

pushRow(ff58, 'firefox/58');
pushRow(ff59, 'firefox/59');
pushRow(ff60, 'firefox/60');
pushRow(ff61, 'firefox/61');

fs.writeFileSync('web/result.json', JSON.stringify(result));