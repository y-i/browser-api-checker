const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

const server = app.listen(28000, function(){
    console.log("port:" + server.address().port);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  

app.post('/', (req, res) => {
    json = req.body;
    console.log(json);
    const ua = json['UA'];
    delete json['UA'];
    fs.writeFileSync(`../result/${encodeURIComponent(ua)}.json`, JSON.stringify(json));
    res.send('');
});