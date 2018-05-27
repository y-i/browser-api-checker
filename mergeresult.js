const chrome66 = require('./result/Chrome%2F66.json');
const chrome68 = require('./result/Chrome%2F68.json');
const ff59 = require('./result/Firefox%2F59.json');
const ff61 = require('./result/Firefox%2F61.json');

const fs = require('fs');

const result = {};

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

Object.keys(chrome68).forEach((k1) => {
    Object.keys(chrome68[k1]).forEach((k2) => {
        Object.keys(chrome68[k1][k2]).forEach((k3) => {
            result[k1][k2][k3]['chrome/68'] = chrome68[k1][k2][k3];
        });
    });
});

Object.keys(ff59).forEach((k1) => {
    Object.keys(ff59[k1]).forEach((k2) => {
        Object.keys(ff59[k1][k2]).forEach((k3) => {
            result[k1][k2][k3]['firefox/59'] = ff59[k1][k2][k3];
        });
    });
});

Object.keys(ff61).forEach((k1) => {
    Object.keys(ff61[k1]).forEach((k2) => {
        Object.keys(ff61[k1][k2]).forEach((k3) => {
            result[k1][k2][k3]['firefox/61'] = ff61[k1][k2][k3];
        });
    });
});

fs.writeFileSync('web/result.json', JSON.stringify(result));