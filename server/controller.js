const Model = require('./model.js');

module.exports = {
  getRaterData: (id, res) => {
    Model.getRaterData((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    }, id);
  },
};