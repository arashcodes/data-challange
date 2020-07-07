const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'lodestone',
  user: 'arashabbasi',
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log(result.rows);
  });
});

seedData = (data) => {
  const query = 'insert into dataset(date, rater, correct_answer_3_label, correct_answer_5_label, rater_answer_3_label, rater_answer_5_label) values($1, $2, $3, $4, $5, $6)';
  const queryVal = [data.date, data.rater, data.correct_answer_3_label, data.correct_answer_5_label, data.rater_answer_3_label, data.rater_answer_5_label];
  pool.query(query, queryVal)
    .then(() => {
      console.log('Data added to DB');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  seedData
};