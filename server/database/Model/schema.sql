-- this is how to creat db -- 
DROP DATABASE IF EXISTS toDoBlog;
CREATE DATABASE toDoBlog;
USE toDoBlog;


-- CREATE TABLE users (
--     id int NOT NULL AUTO_INCREMENT,
--     name varchar(15) NOT NULL,
--     email varchar(20) NOT NULL,
--     password varchar(16) NOT NULL
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE blogs (
--     id int NOT NULL AUTO_INCREMENT,
--     title varchar(50) NOT NULL,
--     status ,
--     description varchar(255) NOT NULL
--     PRIMARY KEY (id)
-- ); 



-- this is how to run it --  mysql -u root -p < server/database/schema.sql