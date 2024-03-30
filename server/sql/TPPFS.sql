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
	image VARCHAR(9999) NOT NULL, -- image of each car(10 million I think is enough 4k picture is just 2 milion characters)(Why not use 'Max' for length? -On my SQL version cannot do it anymore)
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
    datetime DATETIME,  -- The date and time of the car that have customer purchased from us -- can be null if it is not puchased yet
    username VARCHAR(20) NOT NULL REFERENCES account(username)
);

-- Table: login_infor
CREATE TABLE IF NOT EXISTS login_infor (
	datetime DATETIME NOT NULL,  -- The date and time of logining in at that moment
    username VARCHAR(20) NOT NULL REFERENCES account(username), -- User that login
    CONSTRAINT PK_username PRIMARY KEY (username) -- Make username also be PK after being only FK at the previous line
);

INSERT INTO car (image, brand, color, type, price, model, engine, fuel_type, distance, max_liter, gear, product_id, license, release_date, arrive_date, datetime, username) VALUES
('https://thematter.co/wp-content/uploads/2022/01/content-cover-%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%A1%E0%B8%A5%E0%B9%8C%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%99-FB.jpg', 'benz', 'red',  'Rodmay', 3000000,  'Rodgay', 'Smartheart', 'Densilk', '564321', '500', 'M', '245120504837563', '3TR4444', '2011-10-10', '2021-04-11', '2008-11-11' , 'Roymayja'),
('https://s.isanook.com/gu/0/ui/1/9156/268671__06122012104637.jpg?ip/crop/w300/q90/webp', 'Rodthai', 'yellow', 'tuktuk', 400000,  'Tuktuk', 'threewheels', 'Bensill', '220222', '80', 'A', '564655314865353', 'สก7131', '2008-09-30', '2023-12-15', null, 'Tuktukbuntuktarn'),
('https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg', 'Delorean', 'maroon', 'sport', 20000000, 'buterfly', 'WOKEED', 'Soholl', '80451', '65', 'A', '864512542012642', 'ตต1234', '2023-10-22', '2023-11-20', null, 'RodkongTATA');


INSERT INTO account (password, birth_date, lname, fname, email, username, citizen_number, phone_number)
VALUES
('Lanlanlen88898', '2014-03-29', 'Lanlan', 'lalen', 'Lanlanlengaymer@gmail.cum', 'Lannnlalen', 8461465354357, 0542313154),
('consloe82Addsell', '2015-1-26', 'beck', 'senzo', 'becksenzo1292@hotmark.cum', 'sirkakarotbeck', 1741541324313, 0687854111),
('honorablemens1251', '2000-12-07', 'Halo', 'doom', 'EiyudenChronicle@hotmark.cum', 'hundredHeroes1245111', 1450201568141, 0354565156),
('Stellatblade33412', '1952-10-11', 'April', 'jung', 'Sandlandpcpppp@hotmark.cum', 'Sandjungpungmark', 5412356412311, 0456464123);