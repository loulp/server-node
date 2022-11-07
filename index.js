const express = require('express');
const cors = require('cors');
const pois = require('./poi.json');

const app = express();

app.use(cors({ origin: '*' }), express.json());

app.listen(8082, () => {
  console.log('Listening');
});

app.get('/pois', (req, res) => {
  res.status(200).json(pois);
});

app.delete('/networks/:id', (req, res) => {
  const name = req.params.id;
  let poi = pois.find((poi) => (poi.id = id));
  pois.splice(pois.indexOf(poi), 1);
  res.status(200).json(pois);
});
