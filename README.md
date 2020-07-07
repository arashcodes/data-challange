# data-challenge

1. Clone the repo and run “npm install” in root directory

2. From root/database/schema.sql, execute the sql file to create the database and its table 

3. In root/server/model.js, rename the username to your username of choice

4. Run “npm seed” to populate database with randomly generated data

5. Add two extra columns to the table with these commands:
	* alter table dataset add column match_3_label_agreement boolean not null default false;
	* alter table dataset add column match_5_label_agreement boolean not null default false;

6. Update the value of the newly created columns with these two commands representing a boolean if the rater’s answer matches the engineer’s:
	* update dataset set match_3_label_agreement = (correct_answer_3_label = rater_answer_3_label);
	* update dataset set match_5_label_agreement = (correct_answer_5_label = rater_answer_5_label);