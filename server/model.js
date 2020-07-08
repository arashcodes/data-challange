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

getRaterData = (callback, data) => {
  const query1 = `select count(*) from dataset where rater = '${data.id}';`;
  const query2 = `select count(*) from dataset where rater = '${data.id}' and match_3_label_agreement = true;`;
  const query3 = `select count(*) from dataset where rater = '${data.id}' and match_5_label_agreement = true;`;

  pool.query(query1, (err, res1) => {
    pool.query(query2, (err, res2) => {
      pool.query(query3, (err, res3) => {
        const final = {
          total: res1.rows[0].count,
          match3: res2.rows[0].count,
          match5: res3.rows[0].count,
        }
        if (err) {
          callback(err);
        } else {
          callback(null, final);
        }
      })
    })
  })
}

getWeeklyData = (callback, data) => {
  const weeks = {
    '1': `date >= '2005-10-01' and date <= '2005-10-07'`,
    '2': `date >= '2005-10-08' and date <= '2005-10-15'`,
    '3': `date >= '2005-10-16' and date <= '2005-10-23'`,
    '4': `date >= '2005-10-24' and date <= '2005-10-30'`,
  }
  
  const query = `select * from dataset where "date"::${weeks[data.id]}`;
  pool.query(query, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res.rows)
    }
  })
}

getDailyData = (callback, data) => {
  console.log(data.day)
  const query = `select * from dataset where "date"::date = '2005-10-${data.day}'`;
  pool.query(query, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res.rows);
    }
  })
}

module.exports = {
  seedData,
  getRaterData,
  getWeeklyData,
  getDailyData,
};