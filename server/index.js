const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;
const Controller = require('./controller.js');

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/rater/:id', (req, res) => {
  Controller.getRaterData(req.params, res);
})

app.get('/weekly/:id', (req, res) => {
  Controller.getWeeklyData(req.params, res);
})

app.get('/daily/:day', (req, res) => {
  Controller.getDailyData(req.params, res);
})

app.listen(port, () => console.log(`Listening on port ${port}`));
