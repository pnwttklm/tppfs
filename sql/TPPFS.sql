-- DDL

DROP DATABASE IF EXISTS tppfs;
CREATE DATABASE IF NOT EXISTS tppfs;
USE tppfs;

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
    username VARCHAR(20) NOT NULL REFERENCES account(username) -- User that login
     -- CONSTRAINT PK_username PRIMARY KEY (username) -- Make username also be PK after being only FK at the previous line
);

INSERT INTO car (image, brand, color, type, price, model, engine, fuel_type, distance, max_liter, gear, product_id, license, release_date, arrive_date, datetime, username) VALUES
-- ('https://thematter.co/wp-content/uploads/2022/01/content-cover-%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%A1%E0%B8%A5%E0%B9%8C%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%99-FB.jpg', 'benz', 'red',  'Rodmay', 3000000,  'Rodgay', 'Smartheart', 'Densilk', '564321', '500', 'M', '245120504837563', '3TR4444', '2011-10-10', '2021-04-11', '2008-11-11' , 'Roymayja'),
-- ('https://s.isanook.com/gu/0/ui/1/9156/268671__06122012104637.jpg?ip/crop/w300/q90/webp', 'Rodthai', 'yellow', 'tuktuk', 400000,  'Tuktuk', 'threewheels', 'Bensill', '220222', '80', 'A', '564655314865353', 'สก7131', '2008-09-30', '2023-12-15', null, 'Tuktukbuntuktarn'),
-- ('https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg', 'Delorean', 'maroon', 'sport', 20000000, 'buterfly', 'WOKEED', 'Soholl', '80451', '65', 'A', '864512542012642', 'ตต1234', '2023-10-22', '2023-11-20', null, 'RodkongTATA'),
('https://img.kaidee.com/prd/20240326/369344996/m/a0ea8eee-a87b-4c93-a68d-55a21f8c31ce.jpg', 'Honda', 'white', 'sedan', 459000, 'HR-V', '1.8', 'benzene', '90000', '65', 'A', '456', 'ขล 8853', '2016-10-22', '2027-11-20', null, 'JL0'),
('https://img.kaidee.com/prd/20240306/368958058/m/2ac86490-e308-4d53-92f1-adb76158c1c6.jpg', 'Mitsubishi', 'black', 'SUV', 359000, 'Pajero Sport', '2.5', 'diesel', '160000', '70', 'A', '122', '2กด 8719', '2013-5-22', '2015-11-23', null, 'JC1'),
('https://img.kaidee.com/prd/20240321/369319319/m/c5ddfb8a-fe41-4ff5-bcfa-01efd0f67677.jpg', 'Mercedes-Benz', 'white', 'sedan', 799000, 'C-Class', '1.6', 'hybrid', '20000', '65', 'A', '312', '5กต 9215', '2015-5-01', '2016-05-23', null, 'CH2'),
('https://img.kaidee.com/prd/20240304/369220975/b/c5b93d5f-b051-4dc9-8f19-d2daba151f19.jpg', 'Nissan', 'orange', 'sedan', 699000, 'Kicks', '1.2', 'hybrid', '30799', '50', 'A', '302', 'ขก 5746', '2022-3-05', '2023-05-16', null, 'EG3'),
('https://img.kaidee.com/prd/20231111/368748007/b/846ad986-f656-46b3-bd2e-b905d4969973.jpg', 'Mazda', 'gray', 'sedan', 479000, 'CX-5', '2.2', 'diesel', '170000', '60', 'A', '522', '3ขภ 3096', '2016-3-05', '2016-4-16', null, 'SR4'),
('https://img.kaidee.com/prd/20231023/366848216/b/077a4553-84d8-4197-9f16-13acda45c1c6.jpg', 'Audi', 'sliver', 'sedan', 755000, 'Audi TT', '2.0', 'benzene', '92000', '50', 'A', '356', '8กฉ 2214', '2007-4-05', '2008-2-10', null, 'RB5'),
('https://img.kaidee.com/prd/20231023/366848216/b/077a4553-84d8-4197-9f16-13acda45c1c6.jpg', 'Audi', 'gray', 'sedan', 2678000, 'Audi TT', '2.0', 'benzene', '30000', '60', 'A', '268', '4ขจ 2776', '2020-8-13', '2021-3-6', null, 'BB6'),
('https://img.kaidee.com/prd/20240215/369134672/m/565bc140-2371-4329-aa6b-db7b8d89c65d.jpg', 'Audi', 'gray', 'sedan', 7990000, 'Audi RS6', '4.0', 'benzene', '10000', '40', 'A', '31', 'ฐต 77', '2022-4-20', '2020-10-8', null, 'MC7'),
('https://img.kaidee.com/prd/20240118/369033990/m/b8db9d9f-8dce-4756-8587-4f948890c3b3.jpg', 'MG', 'white', 'sedan', 288000, 'GS', '1.5', 'benzene', '197000', '50', 'A', '59', '3ขต 8320', '2018-5-28', '2019-8-01', null, 'DD9'),
('https://img.kaidee.com/prd/20240312/369261310/m/5dc9145d-bb08-4bd2-9c02-7c6c7744f7d6.jpg', 'MG', 'black', 'sedan', 299000, 'GS', '1.5', 'benzene', '120000', '50', 'A', '44', 'ฆจ 252', '2018-7-22', '2019-5-09', null, 'WG10'),
('https://img.kaidee.com/prd/20240213/369128363/b/5c6b78f1-4ca8-40df-ae72-f616a65472b5.jpg', 'Volvo', 'black', 'sedan', 268000, 'S60', '1.6', 'benzene', '120000', '80', 'A', '124', '3กล 1951', '2012-8-5', '2013-2-1', null, 'VC11'),
('https://img.kaidee.com/prd/20240316/369280934/b/7a197a74-4bf5-42a3-ba59-b51acbde8889.jpg', 'Volvo', 'black', 'sedan', 228000, 'V70', '2.4', 'benzene', '380000', '70', 'A', '877', '2ขต 5382', '2004-3-2', '2005-1-2', null, 'BB12'),
('https://img.kaidee.com/prd/20240227/369190296/m/2746cfde-b220-4aa7-8d90-b4b8e215128f.jpg', 'Kia', 'white', 'sedan', 1290000, 'Grand Carnival', '2.2', 'diesel', '70000', '60', 'A', '645', 'บ 0603', '2019-3-8', '2019-8-3', null, 'CC13'),
('https://img.kaidee.com/prd/20231114/368693771/b/415e71b2-285a-428c-adab-9a6b5a750419.jpg', 'Toyota', 'sliver', 'pickup', 285000, 'Hilux Vigo', '2.5', 'diesel', '128326', '65', 'A', '515', 'ญม 8376', '2011-4-1', '2012-1-2', null, 'JB14'),
('https://img.kaidee.com/prd/20240328/369351508/b/1c193e85-a3ed-49aa-bc33-2d8ec78ce9cf.jpg', 'Porsche', 'black', 'sedan', 2350000, 'Cayenne', '3.0', 'hybrid', '78000', '45', 'A', '214', 'ศ 9569', '2016-5-2', '2016-12-28', null, 'JS15'),
('https://img.kaidee.com/prd/20240306/369233989/b/85803800-aa8c-4a29-bfae-bd1bd12820fa.jpg', 'BMW', 'black', 'sedan', 839000, 'X1', '1.5', 'benzene', '91000', '60', 'A', '388', '6กณ 6003', '2017-10-14', '2018-2-18', null, 'CC16'),
('https://img.kaidee.com/prd/20240321/369319371/b/dfa41548-778d-4fbb-9408-07c39c14a068.jpg', 'BMW', 'white', 'sedan', 798000, 'X1', '1.5', 'benzene', '101000', '55', 'A', '420', 'ศร 7', '2018-4-8', '2018-12-10', null, 'CP17'),
('https://img.kaidee.com/prd/20230719/368130555/m/c666ecf8-17dd-4538-a93c-ea463c739dd1.jpg', 'Mini', 'blue', 'micro', 395000, 'ONE', '1.6', 'benzene', '115000', '45', 'A', '78', 'ญฬ 526', '2004-1-17', '2004-11-5', null, 'KH18'),
('https://img.kaidee.com/prd/20240116/368682831/b/c5e08e88-2d7f-446f-baa1-203c769ce48b.jpg', 'Mini', 'yellow', 'micro', 515000, 'Hatch Cooper', '1.6', 'benzene', '108684', '45', 'A', '892', '1ขผ 668', '2020-11-13', '2020-12-5', null, 'EM19'),
('https://img.kaidee.com/prd/20240306/369232372/b/143fa02a-f3bc-4bd2-8cec-403276e48757.jpg', 'Mini', 'green', 'micro', 3090000, 'Convertible', '1.5', 'benzene', '0', '55', 'A', '831', 'ลข 3661', '2024-1-31', '2024-2-6', null, 'GM20'),
('https://img.kaidee.com/prd/20231208/368553478/b/2f06558c-08b6-4833-9463-81fbacf2a8ff.jpg', 'Ford', 'black', 'pickup', 679000, 'Everest', '3.2', 'diesel', '10000', '50', 'A', '740', '5กผ 4811', '2016-10-2', '2017-3-7', null, 'DS21'),
('https://img.kaidee.com/prd/20240317/369286661/m/3e139b7d-fbaa-419a-8f51-2af31a75bdbc.jpg', 'Lexus', 'black', 'minivan', 679000, '-', '2.5', 'hybrid', '32000', '56', 'A', '166', 'ล 6358', '2021-8-7', '2022-1-4', null, 'JA22'),
('https://img.kaidee.com/prd/20230825/368308375/b/2b71b8c1-7faa-4ab4-b978-9848594f4258.jpg', 'Volkswagen', 'gray', 'minivan', 229000, 'Caravelle', '3.2', 'benzene', '220000', '60', 'A', '26', 'ฮล 8415', '2005-10-12', '2006-5-3', null, 'RR23'),
('https://img.kaidee.com/prd/20240323/369328510/m/23d4d1d2-5f97-4f96-aad1-a6aaefee3a0f.jpg', 'Peugeot', 'black', 'minivan', 449000, 'Expert', '2.0', 'diesel', '145000', '60', 'A', '477', 'ฮฐ 4655', '2016-4-20', '2016-10-13', null, 'AG24'),
('https://img.kaidee.com/prd/20240331/369370359/b/2ff7a023-dbd8-4302-9cee-5e5231c28b95.jpg', 'Honda', 'white', 'sedan', 669000, 'Civic', '1.5', 'benzene', '72807', '55', 'A', '82', '7กพ 9103', '2018-10-12', '2019-1-15', null, 'MG25'),
('https://img.kaidee.com/prd/20240316/369283000/m/f074f5a9-e9fe-40f3-b92c-45099df742cc.jpg', 'Toyota', 'gray', 'minivan', 589000, 'Estima', '2.4', 'benzene', '210403', '45', 'A', '58', 'กข 6444', '2012-7-9', '2012-8-10', null, 'MS26'),
('https://img.kaidee.com/prd/20230710/368129888/m/ff6c1fc8-039a-4f55-b8f5-12ab9014b1c4.jpg', 'Toyota', 'black', 'minivan', 448000, 'Alphard', '2.4', 'benzene', '270000', '53', 'A', '717', 'ษณ 5104', '2003-10-4', '2003-12-10', null, 'RB27'),
('https://img.kaidee.com/prd/20240323/369330144/m/ecbeb5bd-8a5e-4fbf-9788-b7b222498eae.jpg', 'Toyota', 'white', 'hatchback', 450000, 'Fortuner', '3.0', 'diesel', '280000', '60', 'A', '644', 'ขฉ 2224', '2010-5-17', '2010-8-26', null, 'AJ28'),
('https://img.kaidee.com/prd/20230731/368211693/m/e9f9b80e-b79d-40c4-86a6-6163a397f11a.jpg', 'Toyota', 'gray', 'minivan', 248000, 'Avanza', '1.5', 'benzene', '65000', '70', 'A', '493', 'กด 9253', '2012-7-19', '2013-2-1', null, 'FM29')
;


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