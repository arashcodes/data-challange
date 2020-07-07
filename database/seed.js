const faker = require('faker');
const Pg = require('../server/model.js');

const date = () => faker.date.between('2005-10-01', '2005-10-30');

const raterIdGenerator = () => {
  const choices = ['A', 'B', 'C', 'D', 'E'];
  const randomIdx = () => Math.floor(Math.random() * 5);

  return choices[randomIdx()];
};

const randomChoice3 = () => {
  const choices = ['Low', 'Average', 'High'];
  const randomIdx = () => Math.floor(Math.random() * 3);

  return choices[randomIdx()];
};

const randomChoice5 = () => {
  const choices = ['Bad', 'Okay', 'Intermediate', 'Great', 'Exceptional'];
  const randomIdx = () => Math.floor(Math.random() * 5);

  return choices[randomIdx()];
};

const seedDB = () => {

  for (let i = 0; i < 10000; i++) {
    Pg.seedData({
      date: date(),
      rater: raterIdGenerator(),
      correct_answer_3_label: randomChoice3(),
      correct_answer_5_label: randomChoice5(),
      rater_answer_3_label: randomChoice3(),
      rater_answer_5_label: randomChoice5(),
    })
  }
}

seedDB();
