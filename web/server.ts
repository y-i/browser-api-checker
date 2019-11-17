import * as fs from 'fs';
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/json', express.static('out'));
app.use('/client', express.static('web/dist'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html', (err) => {
    if (err) {
      res.sendStatus(400);
    } else {
      console.log('sending completed');
    }
  })
});

app.post('/add', (req, res) => {
  console.log('add');
  const {ua, channel} = req.query;
  const json = req.body;
  fs.writeFileSync(__dirname + `/../result/${ua}-${channel}.json`, JSON.stringify(json, null, '\t'));
  res.status(200).send('OK');
})

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
