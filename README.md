# data-challenge
This a full-stack app that works with randomly generated data by provided by engineers and the responses gathered from five raters. After generating the data and following the instruction below, user can monitor the total responses provided by raters to 3 label and 5 label questions. The sample data covers Oct. 1, 2005 to Oct. 30, 2005. Using a bar chart and with the options provided user can compare raters data by daily, weekly or monthly.

The program is written in JavaScript and React on the front-end and Node.js and PostgreSQL on the back-end. 

1. Clone the repo and run “npm install” in root directory

2. From root/database/schema.sql, execute the sql file to create the database and its table 

3. From root/server/model.js, rename the PSQL's username to your username of choice

4. Run “npm run seed” to populate database with randomly generated data

5. Add two extra columns to the table with these commands:
	* alter table dataset add column match_3_label_agreement boolean not null default false;
	* alter table dataset add column match_5_label_agreement boolean not null default false;

6. Update the value of the newly created columns with these two commands representing a boolean if the rater’s answer matches the engineer’s:
	* update dataset set match_3_label_agreement = (correct_answer_3_label = rater_answer_3_label);
	* update dataset set match_5_label_agreement = (correct_answer_5_label = rater_answer_5_label);

7. From root directory run "npm start" to access the app on localhost:3000. You may rename the port number in root/server/index.js.
