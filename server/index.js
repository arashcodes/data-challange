const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const Controller = require('./controller.js');

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/rater/:id', (req, res) => {
  Controller.getRaterData(req.params, res)
})

app.listen(port, () => console.log(`Listening on port ${port}`));
