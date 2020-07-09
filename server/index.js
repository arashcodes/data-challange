const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;
const Controller = require('./controller.js');

app.use('/', express.static(path.join(__dirname, '../client/dist')));

/**
 * Gets all data for each rater (id: A - E)
 */
app.get('/rater/:id', (req, res) => {
  Controller.getRaterData(req.params, res);
})

/**
 * Gets all data in October
 */
app.get('/monthly', (req, res) => {
  Controller.getMonthlyData(req, res);
})

/**
 * Gets all data in a week (id: 1 - 4)
 */
app.get('/weekly/:id', (req, res) => {
  Controller.getWeeklyData(req.params, res);
})

/**
 * Gets data in a specific day (id: 1 - 30)
 */
app.get('/daily/:day', (req, res) => {
  Controller.getDailyData(req.params, res);
})

app.listen(port, () => console.log(`Listening on port ${port}`));
