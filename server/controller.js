const Model = require('./model.js');


/**
 * Routs request coming from server to the database.
 */
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

  getWeeklyData: (id, res) => {
    Model.getWeeklyData((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    }, id);
  },

  getDailyData: (day, res) => {
    Model.getDailyData((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    }, day);
  },

  getMonthlyData: (req, res) => {
    Model.getMonthlyData((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },
};