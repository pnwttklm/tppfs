-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (arm64)
--
-- Host: localhost    Database: tppfs
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `password` varchar(20) NOT NULL,
  `birth_date` date NOT NULL,
  `lname` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `fname` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `email` varchar(40) NOT NULL,
  `username` varchar(20) NOT NULL,
  `citizen_number` char(13) NOT NULL,
  `phone_number` char(10) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES ('EXSEWHHB.4','1964-12-07','Garmon','Amber','AG24@gmail.com','AG24','1359318011244','0813593180'),('uwJomMnw%$2','1973-03-09','Justiniano','Anthony','AJ28@gmail.com','AJ28','1359589760673','0813595897'),('iZdPfRtNk$6','1989-12-17','Beck','Bruce','BB12@gmail.com','BB12','1359019096856','0813590190'),('j=072254081','1981-04-14','Burke','Brenda','BB6@gmail.com','BB6','1358911448759','0813589114'),('GhMKiNL,3506','1959-04-01','Chauarria','Cindy','CC13@gmail.com','CC13','1359220860087','0813592208'),('FkkMFA&6','1954-07-09','Copeland','Cori','CC16@gmail.com','CC16','1359253904569','0813592539'),('VFxR@618811','1977-06-10','Howell','Craig','CH2@gmail.com','CH2','1358795898446','0813587958'),('fBObrS.%388','1992-04-03','Phelps','Colette','CP17@gmail.com','CP17','1359262324146','0813592623'),('eyjJpDJ*4','1995-02-27','Dixon','David','DD9@gmail.com','DD9','1358931303337','0813589313'),('cBPKLG?6','1973-08-26','Smith','Derrick','DS21@gmail.com','DS21','1359286230452','0813592862'),('oB#506','1998-09-06','Gerlach','Elizabeth','EG3@gmail.com','EG3','1358819721562','0813588197'),('ZYCzEn=87','1966-03-17','Mcdonald','Erika','EM19@gmail.com','EM19','1359278306843','0813592783'),('jfeOf=8','1996-10-09','Mcconnell','Frank','FM29@gmail.com','FM29','1359597700919','0813595977'),('nwCmd@,,2','1987-11-25','Longoria','Gary','GL8@gmail.com','GL8','1358931301752','0813589313'),('XEoodsDmc?1','1959-06-27','Mason','Gina','GM20@gmail.com','GM20','1359286228867','0813592862'),('iYdxxUkr+9','1968-01-16','Alvarez','James','JA22@gmail.com','JA22','1359294184167','0813592941'),('loDUs^8161','1980-05-12','Blackwell','Jennifer','JB14@gmail.com','JB14','1359237303100','0813592373'),('vyKyjpXQfb_5','1967-11-03','Crawford','Jarrod','JC1@gmail.com','JC1','1358795896861','0813587958'),('Waf|__-9','1989-01-15','Lige','Janice','JL0@gmail.com','JL0','1358779368282','0813587793'),('oMrFU$*+48','1996-05-24','Sosa','James','JS15@gmail.com','JS15','1359245240969','0813592452'),('JGb-#&76518','1988-12-22','Hayes','Kathleen','KH18@gmail.com','KH18','1359270282615','0813592702'),('jLts!7','1977-09-15','Curtis','Mary','MC7@gmail.com','MC7','1358919396136','0813589193'),('WkyOfI.1','1964-09-26','Glomb','Michael','MG25@gmail.com','MG25','1359457127183','0813594571'),('qx*=+^929','1967-02-04','Schmid','Melida','MS26@gmail.com','MS26','1359487861372','0813594878'),('CZwj%-25','1997-10-06','Byrnes','Randall','RB27@gmail.com','RB27','1359511013425','0813595110'),('OWU&&,172','1998-04-05','Burgoyne','Robert','RB5@gmail.com','RB5','1358907458829','0813589074'),('D$|?5','1964-11-09','Roberts','Ruth','RR23@gmail.com','RR23','1359294185751','0813592941'),('mnkE,1261','1992-12-02','Raya','Sarah','SR4@gmail.com','SR4','1358848400572','0813588484'),('Gvn*@##20','1979-05-04','Cruz','Vera','VC11@gmail.com','VC11','1359011172455','0813590111'),('iIQCiI^?3','1996-10-06','Gensler','William','WG10@gmail.com','WG10','1359003078506','0813590030');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car`
--

DROP TABLE IF EXISTS `car`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car` (
  `image` varchar(9999) NOT NULL,
  `brand` varchar(20) NOT NULL,
  `color` varchar(15) NOT NULL,
  `type` varchar(20) DEFAULT NULL,
  `price` int NOT NULL,
  `model` varchar(15) DEFAULT NULL,
  `engine` varchar(15) DEFAULT NULL,
  `fuel_type` varchar(15) NOT NULL,
  `distance` varchar(10) NOT NULL,
  `max_liter` varchar(5) DEFAULT NULL,
  `gear` char(1) NOT NULL,
  `product_id` char(15) NOT NULL,
  `license` varchar(9) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `release_date` date DEFAULT NULL,
  `arrive_date` date NOT NULL,
  `datetime` datetime DEFAULT NULL,
  `username` varchar(20) NOT NULL,
  PRIMARY KEY (`product_id`),
  CONSTRAINT `car_chk_1` CHECK ((`gear` in (_utf8mb4'M',_utf8mb4'A',_utf8mb4'O')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car`
--

LOCK TABLES `car` WRITE;
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
INSERT INTO `car` VALUES ('https://img.kaidee.com/prd/20240306/368958058/m/2ac86490-e308-4d53-92f1-adb76158c1c6.jpg','Mitsubishi','black','SUV',359000,'Pajero Sport','2.5','diesel','160000','70','A','122','2กด 8719','2013-05-22','2015-11-23',NULL,'JC1'),('https://img.kaidee.com/prd/20240213/369128363/b/5c6b78f1-4ca8-40df-ae72-f616a65472b5.jpg','Volvo','black','sedan',268000,'S60','1.6','benzene','120000','80','A','124','3กล 1951','2012-08-05','2013-02-01',NULL,'VC11'),('https://img.kaidee.com/prd/20240317/369286661/m/3e139b7d-fbaa-419a-8f51-2af31a75bdbc.jpg','Lexus','black','minivan',679000,'-','2.5','hybrid','32000','56','A','166','ล 6358','2021-08-07','2022-01-04',NULL,'JA22'),('https://img.kaidee.com/prd/20240328/369351508/b/1c193e85-a3ed-49aa-bc33-2d8ec78ce9cf.jpg','Porsche','black','sedan',2350000,'Cayenne','3.0','hybrid','78000','45','A','214','ศ 9569','2016-05-02','2016-12-28',NULL,'JS15'),('https://img.kaidee.com/prd/20230825/368308375/b/2b71b8c1-7faa-4ab4-b978-9848594f4258.jpg','Volkswagen','gray','minivan',229000,'Caravelle','3.2','benzene','220000','60','A','26','ฮล 8415','2005-10-12','2006-05-03',NULL,'RR23'),('https://img.kaidee.com/prd/20231023/366848216/b/077a4553-84d8-4197-9f16-13acda45c1c6.jpg','Audi','gray','sedan',2678000,'Audi TT','2.0','benzene','30000','60','A','268','4ขจ 2776','2020-08-13','2021-03-06',NULL,'BB6'),('https://img.kaidee.com/prd/20240304/369220975/b/c5b93d5f-b051-4dc9-8f19-d2daba151f19.jpg','Nissan','orange','sedan',699000,'Kicks','1.2','hybrid','30799','50','A','302','ขก 5746','2022-03-05','2023-05-16',NULL,'EG3'),('https://img.kaidee.com/prd/20240215/369134672/m/565bc140-2371-4329-aa6b-db7b8d89c65d.jpg','Audi','gray','sedan',7990000,'Audi RS6','4.0','benzene','10000','40','A','31','ฐต 77','2022-04-20','2020-10-08',NULL,'MC7'),('https://img.kaidee.com/prd/20240321/369319319/m/c5ddfb8a-fe41-4ff5-bcfa-01efd0f67677.jpg','Mercedes-Benz','white','sedan',799000,'C-Class','1.6','hybrid','20000','65','A','312','5กต 9215','2015-05-01','2016-05-23',NULL,'CH2'),('https://img.kaidee.com/prd/20231023/366848216/b/077a4553-84d8-4197-9f16-13acda45c1c6.jpg','Audi','sliver','sedan',755000,'Audi TT','2.0','benzene','92000','50','A','356','8กฉ 2214','2007-04-05','2008-02-10',NULL,'RB5'),('https://img.kaidee.com/prd/20240306/369233989/b/85803800-aa8c-4a29-bfae-bd1bd12820fa.jpg','BMW','black','sedan',839000,'X1','1.5','benzene','91000','60','A','388','6กณ 6003','2017-10-14','2018-02-18',NULL,'CC16'),('https://img.kaidee.com/prd/20240321/369319371/b/dfa41548-778d-4fbb-9408-07c39c14a068.jpg','BMW','white','sedan',798000,'X1','1.5','benzene','101000','55','A','420','ศร 7','2018-04-08','2018-12-10',NULL,'CP17'),('https://img.kaidee.com/prd/20240312/369261310/m/5dc9145d-bb08-4bd2-9c02-7c6c7744f7d6.jpg','MG','black','sedan',299000,'GS','1.5','benzene','120000','50','A','44','ฆจ 252','2018-07-22','2019-05-09',NULL,'WG10'),('https://img.kaidee.com/prd/20240326/369344996/m/a0ea8eee-a87b-4c93-a68d-55a21f8c31ce.jpg','Honda','white','sedan',459000,'HR-V','1.8','benzene','90000','65','A','456','ขล 8853','2016-10-22','2027-11-20',NULL,'JL0'),('https://img.kaidee.com/prd/20240323/369328510/m/23d4d1d2-5f97-4f96-aad1-a6aaefee3a0f.jpg','Peugeot','black','minivan',449000,'Expert','2.0','diesel','145000','60','A','477','ฮฐ 4655','2016-04-20','2016-10-13',NULL,'AG24'),('https://img.kaidee.com/prd/20230731/368211693/m/e9f9b80e-b79d-40c4-86a6-6163a397f11a.jpg','Toyota','gray','minivan',248000,'Avanza','1.5','benzene','65000','70','A','493','กด 9253','2012-07-19','2013-02-01',NULL,'FM29'),('https://img.kaidee.com/prd/20231114/368693771/b/415e71b2-285a-428c-adab-9a6b5a750419.jpg','Toyota','sliver','pickup',285000,'Hilux Vigo','2.5','diesel','128326','65','A','515','ญม 8376','2011-04-01','2012-01-02',NULL,'JB14'),('https://img.kaidee.com/prd/20231111/368748007/b/846ad986-f656-46b3-bd2e-b905d4969973.jpg','Mazda','gray','sedan',479000,'CX-5','2.2','diesel','170000','60','A','522','3ขภ 3096','2016-03-05','2016-04-16',NULL,'SR4'),('https://img.kaidee.com/prd/20240316/369283000/m/f074f5a9-e9fe-40f3-b92c-45099df742cc.jpg','Toyota','gray','minivan',589000,'Estima','2.4','benzene','210403','45','A','58','กข 6444','2012-07-09','2012-08-10',NULL,'MS26'),('https://img.kaidee.com/prd/20240118/369033990/m/b8db9d9f-8dce-4756-8587-4f948890c3b3.jpg','MG','white','sedan',288000,'GS','1.5','benzene','197000','50','A','59','3ขต 8320','2018-05-28','2019-08-01',NULL,'DD9'),('https://img.kaidee.com/prd/20240323/369330144/m/ecbeb5bd-8a5e-4fbf-9788-b7b222498eae.jpg','Toyota','white','hatchback',450000,'Fortuner','3.0','diesel','280000','60','A','644','ขฉ 2224','2010-05-17','2010-08-26',NULL,'AJ28'),('https://img.kaidee.com/prd/20240227/369190296/m/2746cfde-b220-4aa7-8d90-b4b8e215128f.jpg','Kia','white','sedan',1290000,'Grand Carnival','2.2','diesel','70000','60','A','645','บ 0603','2019-03-08','2019-08-03',NULL,'CC13'),('https://img.kaidee.com/prd/20230710/368129888/m/ff6c1fc8-039a-4f55-b8f5-12ab9014b1c4.jpg','Toyota','black','minivan',448000,'Alphard','2.4','benzene','270000','53','A','717','ษณ 5104','2003-10-04','2003-12-10',NULL,'RB27'),('https://img.kaidee.com/prd/20231208/368553478/b/2f06558c-08b6-4833-9463-81fbacf2a8ff.jpg','Ford','black','pickup',679000,'Everest','3.2','diesel','10000','50','A','740','5กผ 4811','2016-10-02','2017-03-07',NULL,'DS21'),('https://img.kaidee.com/prd/20230719/368130555/m/c666ecf8-17dd-4538-a93c-ea463c739dd1.jpg','Mini','blue','micro',395000,'ONE','1.6','benzene','115000','45','A','78','ญฬ 526','2004-01-17','2004-11-05',NULL,'KH18'),('https://img.kaidee.com/prd/20240331/369370359/b/2ff7a023-dbd8-4302-9cee-5e5231c28b95.jpg','Honda','white','sedan',669000,'Civic','1.5','benzene','72807','55','A','82','7กพ 9103','2018-10-12','2019-01-15',NULL,'MG25'),('https://img.kaidee.com/prd/20240306/369232372/b/143fa02a-f3bc-4bd2-8cec-403276e48757.jpg','Mini','green','micro',3090000,'Convertible','1.5','benzene','0','55','A','831','ลข 3661','2024-01-31','2024-02-06',NULL,'GM20'),('https://img.kaidee.com/prd/20240316/369280934/b/7a197a74-4bf5-42a3-ba59-b51acbde8889.jpg','Volvo','black','sedan',228000,'V70','2.4','benzene','380000','70','A','877','2ขต 5382','2004-03-02','2005-01-02',NULL,'BB12'),('https://img.kaidee.com/prd/20240116/368682831/b/c5e08e88-2d7f-446f-baa1-203c769ce48b.jpg','Mini','yellow','micro',515000,'Hatch Cooper','1.6','benzene','108684','45','A','892','1ขผ 668','2020-11-13','2020-12-05',NULL,'EM19');
/*!40000 ALTER TABLE `car` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_infor`
--

DROP TABLE IF EXISTS `login_infor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_infor` (
  `datetime` datetime NOT NULL,
  `username` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_infor`
--

LOCK TABLES `login_infor` WRITE;
/*!40000 ALTER TABLE `login_infor` DISABLE KEYS */;
/*!40000 ALTER TABLE `login_infor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-22 22:44:32
