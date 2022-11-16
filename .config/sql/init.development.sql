CREATE DATABASE IF NOT EXISTS app;
USE app; 

-- ******************************************
-- define tables
-- ******************************************

CREATE TABLE IF NOT EXISTS user (
  `id`                    INT AUTO_INCREMENT UNIQUE NOT NULL PRIMARY KEY,
  `name`                  TEXT,
  `created`               DATETIME
);

-- ******************************************
-- insert test data
-- ******************************************

-- Requester
INSERT INTO user (name, created) VALUES ("bob", now());
