DROP DATABASE IF EXISTS lodestone;

CREATE DATABASE lodestone;

\c lodestone;

CREATE TABLE IF NOT EXISTS dataset (
 task_id SERIAL PRIMARY KEY,
 date TIMESTAMPTZ NOT NULL,
 rater VARCHAR(1) NOT NULL,
 correct_answer_3_lable VARCHAR(7) NOT NULL,
 correct_answer_5_lable VARCHAR(12) NOT NULL,
 rater_answer_3_lable VARCHAR(7) NOT NULL,
 rater_answer_5_lable VARCHAR(12) NOT NULL
)
