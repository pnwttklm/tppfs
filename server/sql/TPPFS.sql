-- DDL

DROP DATABASE IF EXISTS TPPFS;
CREATE DATABASE IF NOT EXISTS TPPFS;
USE TPPFS;

-- Table: account
CREATE TABLE IF NOT EXISTS account (
	password VARCHAR(20) NOT NULL, 
    birth_date DATE NOT NULL, -- YYYY/MM/DD
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
-- ('Lanlanlen88898', '2014-03-29', 'Lanlan', 'lalen', 'Lanlanlengaymer@gmail.cum', 'Lannnlalen', 8461465354357, 0542313154),
-- ('consloe82Addsell', '2015-1-26', 'beck', 'senzo', 'becksenzo1292@hotmark.cum', 'sirkakarotbeck', 1741541324313, 0687854111),
-- ('honorablemens1251', '2000-12-07', 'Halo', 'doom', 'EiyudenChronicle@hotmark.cum', 'hundredHeroes1245111', 1450201568141, 0354565156),
-- ('Stellatblade33412', '1952-10-11', 'April', 'jung', 'Sandlandpcpppp@hotmark.cum', 'Sandjungpungmark', 5412356412311, 0456464123),
('Waf|__-9', '1989-01-15', 'Lige', 'Janice', 'JL0@gmail.com', 'JL0', '1358779368282', '0813587793'),
('vyKyjpXQfb_5', '1967-11-03', 'Crawford', 'Jarrod', 'JC1@gmail.com', 'JC1', '1358795896861', '0813587958'),
('VFxR@618811', '1977-06-10', 'Howell', 'Craig', 'CH2@gmail.com', 'CH2', '1358795898446', '0813587958'),
('oB#506', '1998-09-06', 'Gerlach', 'Elizabeth', 'EG3@gmail.com', 'EG3', '1358819721562', '0813588197'),
('mnkE,1261', '1992-12-02', 'Raya', 'Sarah', 'SR4@gmail.com', 'SR4', '1358848400572', '0813588484'),
('OWU&&,172', '1998-04-05', 'Burgoyne', 'Robert', 'RB5@gmail.com', 'RB5', '1358907458829', '0813589074'),
('j=072254081', '1981-04-14', 'Burke', 'Brenda', 'BB6@gmail.com', 'BB6', '1358911448759', '0813589114'),
('jLts!7', '1977-09-15', 'Curtis', 'Mary', 'MC7@gmail.com', 'MC7', '1358919396136', '0813589193'),
('nwCmd@,,2', '1987-11-25', 'Longoria', 'Gary', 'GL8@gmail.com', 'GL8', '1358931301752', '0813589313'),
('eyjJpDJ*4', '1995-02-27', 'Dixon', 'David', 'DD9@gmail.com', 'DD9', '1358931303337', '0813589313'),
('iIQCiI^?3', '1996-10-06', 'Gensler', 'William', 'WG10@gmail.com', 'WG10', '1359003078506', '0813590030'),
('Gvn*@##20', '1979-05-04', 'Cruz', 'Vera', 'VC11@gmail.com', 'VC11', '1359011172455', '0813590111'),
('iZdPfRtNk$6', '1989-12-17', 'Beck', 'Bruce', 'BB12@gmail.com', 'BB12', '1359019096856', '0813590190'),
('GhMKiNL,3506', '1959-04-01', 'Chauarria', 'Cindy', 'CC13@gmail.com', 'CC13', '1359220860087', '0813592208'),
('loDUs^8161', '1980-05-12', 'Blackwell', 'Jennifer', 'JB14@gmail.com', 'JB14', '1359237303100', '0813592373'),
('oMrFU$*+48', '1996-05-24', 'Sosa', 'James', 'JS15@gmail.com', 'JS15', '1359245240969', '0813592452'),
('FkkMFA&6', '1954-07-09', 'Copeland', 'Cori', 'CC16@gmail.com', 'CC16', '1359253904569', '0813592539'),
('fBObrS.%388', '1992-04-03', 'Phelps', 'Colette', 'CP17@gmail.com', 'CP17', '1359262324146', '0813592623'),
('JGb-#&76518', '1988-12-22', 'Hayes', 'Kathleen', 'KH18@gmail.com', 'KH18', '1359270282615', '0813592702'),
('ZYCzEn=87', '1966-03-17', 'Mcdonald', 'Erika', 'EM19@gmail.com', 'EM19', '1359278306843', '0813592783'),
('XEoodsDmc?1', '1959-06-27', 'Mason', 'Gina', 'GM20@gmail.com', 'GM20', '1359286228867', '0813592862'),
('cBPKLG?6', '1973-08-26', 'Smith', 'Derrick', 'DS21@gmail.com', 'DS21', '1359286230452', '0813592862'),
('iYdxxUkr+9', '1968-01-16', 'Alvarez', 'James', 'JA22@gmail.com', 'JA22', '1359294184167', '0813592941'),
('D$|?5', '1964-11-09', 'Roberts', 'Ruth', 'RR23@gmail.com', 'RR23', '1359294185751', '0813592941'),
('EXSEWHHB.4', '1964-12-07', 'Garmon', 'Amber', 'AG24@gmail.com', 'AG24', '1359318011244', '0813593180'),
('WkyOfI.1', '1964-09-26', 'Glomb', 'Michael', 'MG25@gmail.com', 'MG25', '1359457127183', '0813594571'),
('qx*=+^929', '1967-02-04', 'Schmid', 'Melida', 'MS26@gmail.com', 'MS26', '1359487861372', '0813594878'),
('CZwj%-25', '1997-10-06', 'Byrnes', 'Randall', 'RB27@gmail.com', 'RB27', '1359511013425', '0813595110'),
('uwJomMnw%$2', '1973-03-09', 'Justiniano', 'Anthony', 'AJ28@gmail.com', 'AJ28', '1359589760673', '0813595897'),
('jfeOf=8', '1996-10-09', 'Mcconnell', 'Frank', 'FM29@gmail.com', 'FM29', '1359597700919', '0813595977');