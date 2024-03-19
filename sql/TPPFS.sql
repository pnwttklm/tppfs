-- DDL

DROP DATABASE IF EXISTS TPPFS;
CREATE DATABASE IF NOT EXISTS TPPFS;
USE TPPFS;

-- Table: account
CREATE TABLE IF NOT EXISTS account (
	password VARCHAR(20) NOT NULL, 
    birth_date DATE NOT NULL,
    lname NVARCHAR(30) NOT NULL,
    fname NVARCHAR(30) NOT NULL,
	email VARCHAR(40) NOT NULL,
    username VARCHAR(20) PRIMARY KEY NOT NULL,
    citizen_number CHAR(13) NOT NULL,
    phone_number CHAR(10) NOT NULL
);

-- Table: car
CREATE TABLE IF NOT EXISTS car (
	brand VARCHAR(20) NOT NULL,
    color VARCHAR(15) NOT NULL,  -- primary color
    type VARCHAR(20),
    price INT NOT NULL,
    model VARCHAR(15),
    engine VARCHAR(15),
    fuel_type VARCHAR(15) NOT NULL,
    distance VARCHAR(10) NOT NULL, -- All distance of the car that have been driven
    max_liter VARCHAR(5), -- Max oil liter capacity of the car
    gear CHAR(1) CHECK (gear IN ('M', 'A', 'O')) NOT NULL, -- M -> Manual, A -> Auto, O -> Others
    product_id CHAR(15) PRIMARY KEY NOT NULL,
    license NVARCHAR(9) NOT NULL,
    release_date DATE,  -- The date that the car is released from the original showroom at the first time
    arrive_date DATE NOT NULL, -- The date that the car arrived at us
    datetime DATETIME NOT NULL,  -- The date and time of the car that have username purchased from us
    username VARCHAR(20) NOT NULL REFERENCES account(username)
);

-- Table: login_infor
CREATE TABLE IF NOT EXISTS login_infor (
	datetime DATETIME NOT NULL,  -- The date and time of logining in at that moment
    username VARCHAR(20) NOT NULL REFERENCES account(username), -- User that login
    CONSTRAINT PK_username PRIMARY KEY (username) -- Make username also be PK after being only FK at the previous line
);