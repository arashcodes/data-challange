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

/**
 * Inserts randomly generated data to the database. 
 */
seedData = (data) => {
  const query = 'insert into dataset(date, rater, correct_answer_3_label, correct_answer_5_label, rater_answer_3_label, rater_answer_5_label) values($1, $2, $3, $4, $5, $6)';
  const queryVal = [data.date, data.rater, data.correct_answer_3_label, data.correct_answer_5_label, data.rater_answer_3_label, data.rater_answer_5_label];
  pool.query(query, queryVal)
    .then(() => {
      console.log('Data stored in DB');
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * Retrieves data for a specific Rater (A - E). 
 */
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

/**
 * Retrieves count of total responses, total correct 3-label and correct 5-label responses,  provided by raters and compared to engineer's response in the month of October.
 */
getMonthlyData = (callback) => {
  const query1 = `select count(*) from dataset where rater = 'A';`;
  const query2 = `select count(*) from dataset where rater = 'A' and match_3_label_agreement = true;`;
  const query3 = `select count(*) from dataset where rater = 'A' and match_5_label_agreement = true;`;
  const query4 = `select count(*) from dataset where rater = 'B';`;
  const query5 = `select count(*) from dataset where rater = 'B' and match_3_label_agreement = true;`;
  const query6 = `select count(*) from dataset where rater = 'B' and match_5_label_agreement = true;`;
  const query7 = `select count(*) from dataset where rater = 'C';`;
  const query8 = `select count(*) from dataset where rater = 'C' and match_3_label_agreement = true;`;
  const query9 = `select count(*) from dataset where rater = 'C' and match_5_label_agreement = true;`;
  const query10 = `select count(*) from dataset where rater = 'D';`;
  const query11 = `select count(*) from dataset where rater = 'D' and match_3_label_agreement = true;`;
  const query12 = `select count(*) from dataset where rater = 'D' and match_5_label_agreement = true;`;
  const query13 = `select count(*) from dataset where rater = 'E';`;
  const query14 = `select count(*) from dataset where rater = 'E' and match_3_label_agreement = true;`;
  const query15 = `select count(*) from dataset where rater = 'E' and match_5_label_agreement = true;`;

  pool.query(query1, (err, res1) => {
    pool.query(query2, (err, res2) => {
      pool.query(query3, (err, res3) => {
        pool.query(query4, (err, res4) => {
          pool.query(query5, (err, res5) => {
            pool.query(query6, (err, res6) => {
              pool.query(query7, (err, res7) => {
                pool.query(query8, (err, res8) => {
                  pool.query(query9, (err, res9) => {
                    pool.query(query10, (err, res10) => {
                      pool.query(query11, (err, res11) => {
                        pool.query(query12, (err, res12) => {
                          pool.query(query13, (err, res13) => {
                            pool.query(query14, (err, res14) => {
                              pool.query(query15, (err, res15) => {
                                const final = {
                                  'A' : {rater: 'A', total: res1.rows[0].count, match3: res2.rows[0].count, match5: res3.rows[0].count},
                                  'B' : {rater: 'B', total: res4.rows[0].count, match3: res5.rows[0].count, match5: res6.rows[0].count},
                                  'C': {rater: 'C', total: res7.rows[0].count, match3: res8.rows[0].count, match5: res9.rows[0].count},
                                  'D': {rater: 'D', total: res10.rows[0].count, match3: res11.rows[0].count, match5: res12.rows[0].count},
                                  'E': {rater: 'E', total: res13.rows[0].count, match3: res14.rows[0].count, match5: res15.rows[0].count}
                                }

                                if (err) {
                                  callback(err);
                                } else {
                                  callback(null, final);
                                }
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
}

/**
 * Retrieves count of total responses, total correct 3-label and correct 5-label responses,  provided by raters and compared to engineer's response in a specified week in October.
 */
getWeeklyData = (callback, data) => {
  const weeks = {
    '1': `date >= '2005-10-01' and date <= '2005-10-07'`,
    '2': `date >= '2005-10-08' and date <= '2005-10-15'`,
    '3': `date >= '2005-10-16' and date <= '2005-10-23'`,
    '4': `date >= '2005-10-24' and date <= '2005-10-30'`,
  }

  const query1 = `select count(*) from dataset where "date"::${weeks[data.id]} and rater = 'A'`;
  const query2 = `select count(*) from dataset where "date"::${weeks[data.id]} and rater = 'A' and match_3_label_agreement = true`;
  const query3 = `select count(*) from dataset where "date"::${weeks[data.id]} and rater = 'A' and match_5_label_agreement = true`;
  const query4 = `select count(*) from dataset where "date"::${weeks[data.id]} and rater = 'B'`;
  const query5 = `select count(*) from dataset where "date"::${weeks[data.id]} and rater = 'B' and match_3_label_agreement = true`;
  const query6 = `select count(*) from dataset where "date"::${weeks[data.id]} and rater = 'B' and match_5_label_agreement = true`;
  const query7 = `select count(*) from dataset where "date"::${weeks[data.id]} and rater = 'C'`;
  const query8 = `select count(*) from dataset where "date"::${weeks[data.id]} and rater = 'C' and match_3_label_agreement = true`;
  const query9 = `select count(*) from dataset where "date"::${weeks[data.id]} and rater = 'C' and match_5_label_agreement = true`;
  const query10 = `select count(*) from dataset where "date"::${weeks[data.id]} and rater = 'D'`;
  const query11 = `select count(*) from dataset where "date"::${weeks[data.id]} and rater = 'D' and match_3_label_agreement = true`;
  const query12 = `select count(*) from dataset where "date"::${weeks[data.id]} and rater = 'D' and match_5_label_agreement = true`;
  const query13 = `select count(*) from dataset where "date"::${weeks[data.id]} and rater = 'E'`;
  const query14 = `select count(*) from dataset where "date"::${weeks[data.id]} and rater = 'E' and match_3_label_agreement = true`;
  const query15 = `select count(*) from dataset where "date"::${weeks[data.id]} and rater = 'E' and match_5_label_agreement = true`;

  pool.query(query1, (err, res1) => {
    pool.query(query2, (err, res2) => {
      pool.query(query3, (err, res3) => {
        pool.query(query4, (err, res4) => {
          pool.query(query5, (err, res5) => {
            pool.query(query6, (err, res6) => {
              pool.query(query7, (err, res7) => {
                pool.query(query8, (err, res8) => {
                  pool.query(query9, (err, res9) => {
                    pool.query(query10, (err, res10) => {
                      pool.query(query11, (err, res11) => {
                        pool.query(query12, (err, res12) => {
                          pool.query(query13, (err, res13) => {
                            pool.query(query14, (err, res14) => {
                              pool.query(query15, (err, res15) => {
                                const final = {
                                  'A' : {rater: 'A', total: res1.rows[0].count, match3: res2.rows[0].count, match5: res3.rows[0].count},
                                  'B' : {rater: 'B', total: res4.rows[0].count, match3: res5.rows[0].count, match5: res6.rows[0].count},
                                  'C': {rater: 'C', total: res7.rows[0].count, match3: res8.rows[0].count, match5: res9.rows[0].count},
                                  'D': {rater: 'D', total: res10.rows[0].count, match3: res11.rows[0].count, match5: res12.rows[0].count},
                                  'E': {rater: 'E', total: res13.rows[0].count, match3: res14.rows[0].count, match5: res15.rows[0].count}
                                }

                                if (err) {
                                  callback(err);
                                } else {
                                  callback(null, final);
                                }
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
}

/**
 * Retrieves count of total responses, total correct 3-label and correct 5-label responses,  provided by raters and compared to engineer's response in a specified day in October.
 */
getDailyData = (callback, data) => {
  const query1 = `select count(*) from dataset where "date"::date = '2005-10-${data.day}' and rater = 'A'`;
  const query2 = `select count(*) from dataset where "date"::date = '2005-10-${data.day}' and rater = 'A' and match_3_label_agreement = true;`;
  const query3 = `select count(*) from dataset where "date"::date = '2005-10-${data.day}' and rater = 'A' and match_5_label_agreement = true;`;
  const query4 = `select count(*) from dataset where "date"::date = '2005-10-${data.day}' and rater = 'B'`;
  const query5 = `select count(*) from dataset where "date"::date = '2005-10-${data.day}' and rater = 'B' and match_3_label_agreement = true;`;
  const query6 = `select count(*) from dataset where "date"::date = '2005-10-${data.day}' and rater = 'B' and match_5_label_agreement = true;`;
  const query7 = `select count(*) from dataset where "date"::date = '2005-10-${data.day}' and rater = 'C'`;
  const query8 = `select count(*) from dataset where "date"::date = '2005-10-${data.day}' and rater = 'C' and match_3_label_agreement = true;`;
  const query9 = `select count(*) from dataset where "date"::date = '2005-10-${data.day}' and rater = 'C' and match_5_label_agreement = true;`;
  const query10 = `select count(*) from dataset where "date"::date = '2005-10-${data.day}' and rater = 'D'`;
  const query11 = `select count(*) from dataset where "date"::date = '2005-10-${data.day}' and rater = 'D' and match_3_label_agreement = true;`;
  const query12 = `select count(*) from dataset where "date"::date = '2005-10-${data.day}' and rater = 'D' and match_5_label_agreement = true;`;
  const query13 = `select count(*) from dataset where "date"::date = '2005-10-${data.day}' and rater = 'E'`;
  const query14 = `select count(*) from dataset where "date"::date = '2005-10-${data.day}' and rater = 'E' and match_3_label_agreement = true;`;
  const query15 = `select count(*) from dataset where "date"::date = '2005-10-${data.day}' and rater = 'E' and match_5_label_agreement = true;`;

  pool.query(query1, (err, res1) => {
    pool.query(query2, (err, res2) => {
      pool.query(query3, (err, res3) => {
        pool.query(query4, (err, res4) => {
          pool.query(query5, (err, res5) => {
            pool.query(query6, (err, res6) => {
              pool.query(query7, (err, res7) => {
                pool.query(query8, (err, res8) => {
                  pool.query(query9, (err, res9) => {
                    pool.query(query10, (err, res10) => {
                      pool.query(query11, (err, res11) => {
                        pool.query(query12, (err, res12) => {
                          pool.query(query13, (err, res13) => {
                            pool.query(query14, (err, res14) => {
                              pool.query(query15, (err, res15) => {
                                const final = {
                                  'A' : {rater: 'A', total: res1.rows[0].count, match3: res2.rows[0].count, match5: res3.rows[0].count},
                                  'B' : {rater: 'B', total: res4.rows[0].count, match3: res5.rows[0].count, match5: res6.rows[0].count},
                                  'C': {rater: 'C', total: res7.rows[0].count, match3: res8.rows[0].count, match5: res9.rows[0].count},
                                  'D': {rater: 'D', total: res10.rows[0].count, match3: res11.rows[0].count, match5: res12.rows[0].count},
                                  'E': {rater: 'E', total: res13.rows[0].count, match3: res14.rows[0].count, match5: res15.rows[0].count}
                                }

                                if (err) {
                                  callback(err);
                                } else {
                                  callback(null, final);
                                }
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
}

module.exports = {
  seedData,
  getRaterData,
  getWeeklyData,
  getDailyData,
  getMonthlyData,
};