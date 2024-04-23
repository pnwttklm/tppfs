const dotenv = require("dotenv");
dotenv.config(); //process.env = .env //process.env is declared by

const express = require("express");
const cors = require("cors"); // Import cors middleware 
const app = express();
const port = process.env.PORT || 8101;
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

app.use(cors()); // Use cors middleware
app.use(router);

const mysql = require("mysql2");

var connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

connection.connect(function (err) {
  if (err) {
    console.log("ERROR MySQL server.");
    return console.error("error: " + err.message);
  }
  console.log("Connected to the MySQL server.");
});

router.get("/", (req, res) => {
  res.send("Hello World, the server is running!");
});


// Section A: Cars
// Testing Get all cars #1
// method: GET
// body: 
// result: 
// [
//   {
//       "image": "https://img.kaidee.com/prd/20240306/368958058/m/2ac86490-e308-4d53-92f1-adb76158c1c6.jpg",
//       "brand": "Mitsubishi",
//       "color": "black",
//       "type": "SUV",
//       "price": 359000,
//       "model": "Pajero Sport",
//       "engine": "2.5",
//       "fuel_type": "diesel",
//       "distance": "160000",
//       "max_liter": "70",
//       "gear": "A",
//       "product_id": "122",
//       "license": "2กด 8719",
//       "release_date": "2013-05-22T00:00:00.000Z",
//       "arrive_date": "2015-11-23T00:00:00.000Z",
//       "datetime": null,
//       "username": "JC1"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240213/369128363/b/5c6b78f1-4ca8-40df-ae72-f616a65472b5.jpg",
//       "brand": "Volvo",
//       "color": "black",
//       "type": "sedan",
//       "price": 268000,
//       "model": "S60",
//       "engine": "1.6",
//       "fuel_type": "benzene",
//       "distance": "120000",
//       "max_liter": "80",
//       "gear": "A",
//       "product_id": "124",
//       "license": "3กล 1951",
//       "release_date": "2012-08-05T00:00:00.000Z",
//       "arrive_date": "2013-02-01T00:00:00.000Z",
//       "datetime": null,
//       "username": "VC11"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240317/369286661/m/3e139b7d-fbaa-419a-8f51-2af31a75bdbc.jpg",
//       "brand": "Lexus",
//       "color": "black",
//       "type": "minivan",
//       "price": 679000,
//       "model": "-",
//       "engine": "2.5",
//       "fuel_type": "hybrid",
//       "distance": "32000",
//       "max_liter": "56",
//       "gear": "A",
//       "product_id": "166",
//       "license": "ล 6358",
//       "release_date": "2021-08-07T00:00:00.000Z",
//       "arrive_date": "2022-01-04T00:00:00.000Z",
//       "datetime": null,
//       "username": "JA22"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240328/369351508/b/1c193e85-a3ed-49aa-bc33-2d8ec78ce9cf.jpg",
//       "brand": "Porsche",
//       "color": "black",
//       "type": "sedan",
//       "price": 2350000,
//       "model": "Cayenne",
//       "engine": "3.0",
//       "fuel_type": "hybrid",
//       "distance": "78000",
//       "max_liter": "45",
//       "gear": "A",
//       "product_id": "214",
//       "license": "ศ 9569",
//       "release_date": "2016-05-02T00:00:00.000Z",
//       "arrive_date": "2016-12-28T00:00:00.000Z",
//       "datetime": null,
//       "username": "JS15"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20230825/368308375/b/2b71b8c1-7faa-4ab4-b978-9848594f4258.jpg",
//       "brand": "Volkswagen",
//       "color": "gray",
//       "type": "minivan",
//       "price": 229000,
//       "model": "Caravelle",
//       "engine": "3.2",
//       "fuel_type": "benzene",
//       "distance": "220000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "26",
//       "license": "ฮล 8415",
//       "release_date": "2005-10-12T00:00:00.000Z",
//       "arrive_date": "2006-05-03T00:00:00.000Z",
//       "datetime": null,
//       "username": "RR23"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20231023/366848216/b/077a4553-84d8-4197-9f16-13acda45c1c6.jpg",
//       "brand": "Audi",
//       "color": "gray",
//       "type": "sedan",
//       "price": 2678000,
//       "model": "Audi TT",
//       "engine": "2.0",
//       "fuel_type": "benzene",
//       "distance": "30000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "268",
//       "license": "4ขจ 2776",
//       "release_date": "2020-08-13T00:00:00.000Z",
//       "arrive_date": "2021-03-06T00:00:00.000Z",
//       "datetime": null,
//       "username": "BB6"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240304/369220975/b/c5b93d5f-b051-4dc9-8f19-d2daba151f19.jpg",
//       "brand": "Nissan",
//       "color": "orange",
//       "type": "sedan",
//       "price": 699000,
//       "model": "Kicks",
//       "engine": "1.2",
//       "fuel_type": "hybrid",
//       "distance": "30799",
//       "max_liter": "50",
//       "gear": "A",
//       "product_id": "302",
//       "license": "ขก 5746",
//       "release_date": "2022-03-05T00:00:00.000Z",
//       "arrive_date": "2023-05-16T00:00:00.000Z",
//       "datetime": null,
//       "username": "EG3"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240215/369134672/m/565bc140-2371-4329-aa6b-db7b8d89c65d.jpg",
//       "brand": "Audi",
//       "color": "gray",
//       "type": "sedan",
//       "price": 7990000,
//       "model": "Audi RS6",
//       "engine": "4.0",
//       "fuel_type": "benzene",
//       "distance": "10000",
//       "max_liter": "40",
//       "gear": "A",
//       "product_id": "31",
//       "license": "ฐต 77",
//       "release_date": "2022-04-20T00:00:00.000Z",
//       "arrive_date": "2020-10-08T00:00:00.000Z",
//       "datetime": null,
//       "username": "MC7"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20231023/366848216/b/077a4553-84d8-4197-9f16-13acda45c1c6.jpg",
//       "brand": "Audi",
//       "color": "sliver",
//       "type": "sedan",
//       "price": 755000,
//       "model": "Audi TT",
//       "engine": "2.0",
//       "fuel_type": "benzene",
//       "distance": "92000",
//       "max_liter": "50",
//       "gear": "A",
//       "product_id": "356",
//       "license": "8กฉ 2214",
//       "release_date": "2007-04-05T00:00:00.000Z",
//       "arrive_date": "2008-02-10T00:00:00.000Z",
//       "datetime": null,
//       "username": "RB5"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240306/369233989/b/85803800-aa8c-4a29-bfae-bd1bd12820fa.jpg",
//       "brand": "BMW",
//       "color": "black",
//       "type": "sedan",
//       "price": 839000,
//       "model": "X1",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "91000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "388",
//       "license": "6กณ 6003",
//       "release_date": "2017-10-14T00:00:00.000Z",
//       "arrive_date": "2018-02-18T00:00:00.000Z",
//       "datetime": null,
//       "username": "CC16"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240321/369319371/b/dfa41548-778d-4fbb-9408-07c39c14a068.jpg",
//       "brand": "BMW",
//       "color": "white",
//       "type": "sedan",
//       "price": 798000,
//       "model": "X1",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "101000",
//       "max_liter": "55",
//       "gear": "A",
//       "product_id": "420",
//       "license": "ศร 7",
//       "release_date": "2018-04-08T00:00:00.000Z",
//       "arrive_date": "2018-12-10T00:00:00.000Z",
//       "datetime": null,
//       "username": "CP17"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240312/369261310/m/5dc9145d-bb08-4bd2-9c02-7c6c7744f7d6.jpg",
//       "brand": "MG",
//       "color": "black",
//       "type": "sedan",
//       "price": 299000,
//       "model": "GS",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "120000",
//       "max_liter": "50",
//       "gear": "A",
//       "product_id": "44",
//       "license": "ฆจ 252",
//       "release_date": "2018-07-22T00:00:00.000Z",
//       "arrive_date": "2019-05-09T00:00:00.000Z",
//       "datetime": null,
//       "username": "WG10"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240326/369344996/m/a0ea8eee-a87b-4c93-a68d-55a21f8c31ce.jpg",
//       "brand": "Honda",
//       "color": "white",
//       "type": "sedan",
//       "price": 459000,
//       "model": "HR-V",
//       "engine": "1.8",
//       "fuel_type": "benzene",
//       "distance": "90000",
//       "max_liter": "65",
//       "gear": "A",
//       "product_id": "456",
//       "license": "ขล 8853",
//       "release_date": "2018-10-22T00:00:00.000Z",
//       "arrive_date": "2026-11-20T00:00:00.000Z",
//       "datetime": null,
//       "username": "JL0"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240323/369328510/m/23d4d1d2-5f97-4f96-aad1-a6aaefee3a0f.jpg",
//       "brand": "Peugeot",
//       "color": "black",
//       "type": "minivan",
//       "price": 449000,
//       "model": "Expert",
//       "engine": "2.0",
//       "fuel_type": "diesel",
//       "distance": "145000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "477",
//       "license": "ฮฐ 4655",
//       "release_date": "2016-04-20T00:00:00.000Z",
//       "arrive_date": "2016-10-13T00:00:00.000Z",
//       "datetime": null,
//       "username": "AG24"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20230731/368211693/m/e9f9b80e-b79d-40c4-86a6-6163a397f11a.jpg",
//       "brand": "Toyota",
//       "color": "gray",
//       "type": "minivan",
//       "price": 248000,
//       "model": "Avanza",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "65000",
//       "max_liter": "70",
//       "gear": "A",
//       "product_id": "493",
//       "license": "กด 9253",
//       "release_date": "2012-07-19T00:00:00.000Z",
//       "arrive_date": "2013-02-01T00:00:00.000Z",
//       "datetime": null,
//       "username": "FM29"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20231114/368693771/b/415e71b2-285a-428c-adab-9a6b5a750419.jpg",
//       "brand": "Toyota",
//       "color": "sliver",
//       "type": "pickup",
//       "price": 285000,
//       "model": "Hilux Vigo",
//       "engine": "2.5",
//       "fuel_type": "diesel",
//       "distance": "128326",
//       "max_liter": "65",
//       "gear": "A",
//       "product_id": "515",
//       "license": "ญม 8376",
//       "release_date": "2011-04-01T00:00:00.000Z",
//       "arrive_date": "2012-01-02T00:00:00.000Z",
//       "datetime": null,
//       "username": "JB14"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20231111/368748007/b/846ad986-f656-46b3-bd2e-b905d4969973.jpg",
//       "brand": "Mazda",
//       "color": "gray",
//       "type": "sedan",
//       "price": 479000,
//       "model": "CX-5",
//       "engine": "2.2",
//       "fuel_type": "diesel",
//       "distance": "170000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "522",
//       "license": "3ขภ 3096",
//       "release_date": "2016-03-05T00:00:00.000Z",
//       "arrive_date": "2016-04-16T00:00:00.000Z",
//       "datetime": null,
//       "username": "SR4"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240316/369283000/m/f074f5a9-e9fe-40f3-b92c-45099df742cc.jpg",
//       "brand": "Toyota",
//       "color": "gray",
//       "type": "minivan",
//       "price": 589000,
//       "model": "Estima",
//       "engine": "2.4",
//       "fuel_type": "benzene",
//       "distance": "210403",
//       "max_liter": "45",
//       "gear": "A",
//       "product_id": "58",
//       "license": "กข 6444",
//       "release_date": "2012-07-09T00:00:00.000Z",
//       "arrive_date": "2012-08-10T00:00:00.000Z",
//       "datetime": null,
//       "username": "MS26"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240118/369033990/m/b8db9d9f-8dce-4756-8587-4f948890c3b3.jpg",
//       "brand": "MG",
//       "color": "white",
//       "type": "sedan",
//       "price": 288000,
//       "model": "GS",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "197000",
//       "max_liter": "50",
//       "gear": "A",
//       "product_id": "59",
//       "license": "3ขต 8320",
//       "release_date": "2018-05-28T00:00:00.000Z",
//       "arrive_date": "2019-08-01T00:00:00.000Z",
//       "datetime": null,
//       "username": "DD9"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240323/369330144/m/ecbeb5bd-8a5e-4fbf-9788-b7b222498eae.jpg",
//       "brand": "Toyota",
//       "color": "white",
//       "type": "hatchback",
//       "price": 450000,
//       "model": "Fortuner",
//       "engine": "3.0",
//       "fuel_type": "diesel",
//       "distance": "280000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "644",
//       "license": "ขฉ 2224",
//       "release_date": "2010-05-17T00:00:00.000Z",
//       "arrive_date": "2010-08-26T00:00:00.000Z",
//       "datetime": null,
//       "username": "AJ28"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240227/369190296/m/2746cfde-b220-4aa7-8d90-b4b8e215128f.jpg",
//       "brand": "Kia",
//       "color": "white",
//       "type": "sedan",
//       "price": 1290000,
//       "model": "Grand Carnival",
//       "engine": "2.2",
//       "fuel_type": "diesel",
//       "distance": "70000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "645",
//       "license": "บ 0603",
//       "release_date": "2019-03-08T00:00:00.000Z",
//       "arrive_date": "2019-08-03T00:00:00.000Z",
//       "datetime": null,
//       "username": "CC13"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20230710/368129888/m/ff6c1fc8-039a-4f55-b8f5-12ab9014b1c4.jpg",
//       "brand": "Toyota",
//       "color": "black",
//       "type": "minivan",
//       "price": 448000,
//       "model": "Alphard",
//       "engine": "2.4",
//       "fuel_type": "benzene",
//       "distance": "270000",
//       "max_liter": "53",
//       "gear": "A",
//       "product_id": "717",
//       "license": "ษณ 5104",
//       "release_date": "2003-10-04T00:00:00.000Z",
//       "arrive_date": "2003-12-10T00:00:00.000Z",
//       "datetime": null,
//       "username": "RB27"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20231208/368553478/b/2f06558c-08b6-4833-9463-81fbacf2a8ff.jpg",
//       "brand": "Ford",
//       "color": "black",
//       "type": "pickup",
//       "price": 679000,
//       "model": "Everest",
//       "engine": "3.2",
//       "fuel_type": "diesel",
//       "distance": "10000",
//       "max_liter": "50",
//       "gear": "A",
//       "product_id": "740",
//       "license": "5กผ 4811",
//       "release_date": "2016-10-02T00:00:00.000Z",
//       "arrive_date": "2017-03-07T00:00:00.000Z",
//       "datetime": null,
//       "username": "DS21"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20230719/368130555/m/c666ecf8-17dd-4538-a93c-ea463c739dd1.jpg",
//       "brand": "Mini",
//       "color": "blue",
//       "type": "micro",
//       "price": 395000,
//       "model": "ONE",
//       "engine": "1.6",
//       "fuel_type": "benzene",
//       "distance": "115000",
//       "max_liter": "45",
//       "gear": "A",
//       "product_id": "78",
//       "license": "ญฬ 526",
//       "release_date": "2004-01-17T00:00:00.000Z",
//       "arrive_date": "2004-11-05T00:00:00.000Z",
//       "datetime": null,
//       "username": "KH18"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240331/369370359/b/2ff7a023-dbd8-4302-9cee-5e5231c28b95.jpg",
//       "brand": "Honda",
//       "color": "white",
//       "type": "sedan",
//       "price": 669000,
//       "model": "Civic",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "72807",
//       "max_liter": "55",
//       "gear": "A",
//       "product_id": "82",
//       "license": "7กพ 9103",
//       "release_date": "2018-10-12T00:00:00.000Z",
//       "arrive_date": "2019-01-15T00:00:00.000Z",
//       "datetime": null,
//       "username": "MG25"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240306/369232372/b/143fa02a-f3bc-4bd2-8cec-403276e48757.jpg",
//       "brand": "Mini",
//       "color": "green",
//       "type": "micro",
//       "price": 3090000,
//       "model": "Convertible",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "0",
//       "max_liter": "55",
//       "gear": "A",
//       "product_id": "831",
//       "license": "ลข 3661",
//       "release_date": "2024-01-31T00:00:00.000Z",
//       "arrive_date": "2024-02-06T00:00:00.000Z",
//       "datetime": null,
//       "username": "GM20"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240316/369280934/b/7a197a74-4bf5-42a3-ba59-b51acbde8889.jpg",
//       "brand": "Volvo",
//       "color": "black",
//       "type": "sedan",
//       "price": 228000,
//       "model": "V70",
//       "engine": "2.4",
//       "fuel_type": "benzene",
//       "distance": "380000",
//       "max_liter": "70",
//       "gear": "A",
//       "product_id": "877",
//       "license": "2ขต 5382",
//       "release_date": "2004-03-02T00:00:00.000Z",
//       "arrive_date": "2005-01-02T00:00:00.000Z",
//       "datetime": null,
//       "username": "BB12"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240116/368682831/b/c5e08e88-2d7f-446f-baa1-203c769ce48b.jpg",
//       "brand": "Mini",
//       "color": "yellow",
//       "type": "micro",
//       "price": 515000,
//       "model": "Hatch Cooper",
//       "engine": "1.6",
//       "fuel_type": "benzene",
//       "distance": "108684",
//       "max_liter": "45",
//       "gear": "A",
//       "product_id": "892",
//       "license": "1ขผ 668",
//       "release_date": "2020-11-13T00:00:00.000Z",
//       "arrive_date": "2020-12-05T00:00:00.000Z",
//       "datetime": null,
//       "username": "EM19"
//   }
// ]
// Testing Get all cars #2
// method: GET
// body: 
// result: 
// [
//   {
//       "image": "https://img.kaidee.com/prd/20240306/368958058/m/2ac86490-e308-4d53-92f1-adb76158c1c6.jpg",
//       "brand": "Mitsubishi",
//       "color": "black",
//       "type": "SUV",
//       "price": 359000,
//       "model": "Pajero Sport",
//       "engine": "2.5",
//       "fuel_type": "diesel",
//       "distance": "160000",
//       "max_liter": "70",
//       "gear": "A",
//       "product_id": "122",
//       "license": "2กด 8719",
//       "release_date": "2013-05-22T00:00:00.000Z",
//       "arrive_date": "2015-11-23T00:00:00.000Z",
//       "datetime": null,
//       "username": "JC1"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240213/369128363/b/5c6b78f1-4ca8-40df-ae72-f616a65472b5.jpg",
//       "brand": "Volvo",
//       "color": "black",
//       "type": "sedan",
//       "price": 268000,
//       "model": "S60",
//       "engine": "1.6",
//       "fuel_type": "benzene",
//       "distance": "120000",
//       "max_liter": "80",
//       "gear": "A",
//       "product_id": "124",
//       "license": "3กล 1951",
//       "release_date": "2012-08-05T00:00:00.000Z",
//       "arrive_date": "2013-02-01T00:00:00.000Z",
//       "datetime": null,
//       "username": "VC11"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240317/369286661/m/3e139b7d-fbaa-419a-8f51-2af31a75bdbc.jpg",
//       "brand": "Lexus",
//       "color": "black",
//       "type": "minivan",
//       "price": 679000,
//       "model": "-",
//       "engine": "2.5",
//       "fuel_type": "hybrid",
//       "distance": "32000",
//       "max_liter": "56",
//       "gear": "A",
//       "product_id": "166",
//       "license": "ล 6358",
//       "release_date": "2021-08-07T00:00:00.000Z",
//       "arrive_date": "2022-01-04T00:00:00.000Z",
//       "datetime": null,
//       "username": "JA22"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240328/369351508/b/1c193e85-a3ed-49aa-bc33-2d8ec78ce9cf.jpg",
//       "brand": "Porsche",
//       "color": "black",
//       "type": "sedan",
//       "price": 2350000,
//       "model": "Cayenne",
//       "engine": "3.0",
//       "fuel_type": "hybrid",
//       "distance": "78000",
//       "max_liter": "45",
//       "gear": "A",
//       "product_id": "214",
//       "license": "ศ 9569",
//       "release_date": "2016-05-02T00:00:00.000Z",
//       "arrive_date": "2016-12-28T00:00:00.000Z",
//       "datetime": null,
//       "username": "JS15"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20230825/368308375/b/2b71b8c1-7faa-4ab4-b978-9848594f4258.jpg",
//       "brand": "Volkswagen",
//       "color": "gray",
//       "type": "minivan",
//       "price": 229000,
//       "model": "Caravelle",
//       "engine": "3.2",
//       "fuel_type": "benzene",
//       "distance": "220000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "26",
//       "license": "ฮล 8415",
//       "release_date": "2005-10-12T00:00:00.000Z",
//       "arrive_date": "2006-05-03T00:00:00.000Z",
//       "datetime": null,
//       "username": "RR23"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20231023/366848216/b/077a4553-84d8-4197-9f16-13acda45c1c6.jpg",
//       "brand": "Audi",
//       "color": "gray",
//       "type": "sedan",
//       "price": 2678000,
//       "model": "Audi TT",
//       "engine": "2.0",
//       "fuel_type": "benzene",
//       "distance": "30000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "268",
//       "license": "4ขจ 2776",
//       "release_date": "2020-08-13T00:00:00.000Z",
//       "arrive_date": "2021-03-06T00:00:00.000Z",
//       "datetime": null,
//       "username": "BB6"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240304/369220975/b/c5b93d5f-b051-4dc9-8f19-d2daba151f19.jpg",
//       "brand": "Nissan",
//       "color": "orange",
//       "type": "sedan",
//       "price": 699000,
//       "model": "Kicks",
//       "engine": "1.2",
//       "fuel_type": "hybrid",
//       "distance": "30799",
//       "max_liter": "50",
//       "gear": "A",
//       "product_id": "302",
//       "license": "ขก 5746",
//       "release_date": "2022-03-05T00:00:00.000Z",
//       "arrive_date": "2023-05-16T00:00:00.000Z",
//       "datetime": null,
//       "username": "EG3"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240215/369134672/m/565bc140-2371-4329-aa6b-db7b8d89c65d.jpg",
//       "brand": "Audi",
//       "color": "gray",
//       "type": "sedan",
//       "price": 7990000,
//       "model": "Audi RS6",
//       "engine": "4.0",
//       "fuel_type": "benzene",
//       "distance": "10000",
//       "max_liter": "40",
//       "gear": "A",
//       "product_id": "31",
//       "license": "ฐต 77",
//       "release_date": "2022-04-20T00:00:00.000Z",
//       "arrive_date": "2020-10-08T00:00:00.000Z",
//       "datetime": null,
//       "username": "MC7"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20231023/366848216/b/077a4553-84d8-4197-9f16-13acda45c1c6.jpg",
//       "brand": "Audi",
//       "color": "sliver",
//       "type": "sedan",
//       "price": 755000,
//       "model": "Audi TT",
//       "engine": "2.0",
//       "fuel_type": "benzene",
//       "distance": "92000",
//       "max_liter": "50",
//       "gear": "A",
//       "product_id": "356",
//       "license": "8กฉ 2214",
//       "release_date": "2007-04-05T00:00:00.000Z",
//       "arrive_date": "2008-02-10T00:00:00.000Z",
//       "datetime": null,
//       "username": "RB5"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240306/369233989/b/85803800-aa8c-4a29-bfae-bd1bd12820fa.jpg",
//       "brand": "BMW",
//       "color": "black",
//       "type": "sedan",
//       "price": 839000,
//       "model": "X1",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "91000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "388",
//       "license": "6กณ 6003",
//       "release_date": "2017-10-14T00:00:00.000Z",
//       "arrive_date": "2018-02-18T00:00:00.000Z",
//       "datetime": null,
//       "username": "CC16"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240321/369319371/b/dfa41548-778d-4fbb-9408-07c39c14a068.jpg",
//       "brand": "BMW",
//       "color": "white",
//       "type": "sedan",
//       "price": 798000,
//       "model": "X1",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "101000",
//       "max_liter": "55",
//       "gear": "A",
//       "product_id": "420",
//       "license": "ศร 7",
//       "release_date": "2018-04-08T00:00:00.000Z",
//       "arrive_date": "2018-12-10T00:00:00.000Z",
//       "datetime": null,
//       "username": "CP17"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240312/369261310/m/5dc9145d-bb08-4bd2-9c02-7c6c7744f7d6.jpg",
//       "brand": "MG",
//       "color": "black",
//       "type": "sedan",
//       "price": 299000,
//       "model": "GS",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "120000",
//       "max_liter": "50",
//       "gear": "A",
//       "product_id": "44",
//       "license": "ฆจ 252",
//       "release_date": "2018-07-22T00:00:00.000Z",
//       "arrive_date": "2019-05-09T00:00:00.000Z",
//       "datetime": null,
//       "username": "WG10"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240326/369344996/m/a0ea8eee-a87b-4c93-a68d-55a21f8c31ce.jpg",
//       "brand": "Honda",
//       "color": "white",
//       "type": "sedan",
//       "price": 459000,
//       "model": "HR-V",
//       "engine": "1.8",
//       "fuel_type": "benzene",
//       "distance": "90000",
//       "max_liter": "65",
//       "gear": "A",
//       "product_id": "456",
//       "license": "ขล 8853",
//       "release_date": "2018-10-22T00:00:00.000Z",
//       "arrive_date": "2026-11-20T00:00:00.000Z",
//       "datetime": null,
//       "username": "JL0"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240323/369328510/m/23d4d1d2-5f97-4f96-aad1-a6aaefee3a0f.jpg",
//       "brand": "Peugeot",
//       "color": "black",
//       "type": "minivan",
//       "price": 449000,
//       "model": "Expert",
//       "engine": "2.0",
//       "fuel_type": "diesel",
//       "distance": "145000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "477",
//       "license": "ฮฐ 4655",
//       "release_date": "2016-04-20T00:00:00.000Z",
//       "arrive_date": "2016-10-13T00:00:00.000Z",
//       "datetime": null,
//       "username": "AG24"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20230731/368211693/m/e9f9b80e-b79d-40c4-86a6-6163a397f11a.jpg",
//       "brand": "Toyota",
//       "color": "gray",
//       "type": "minivan",
//       "price": 248000,
//       "model": "Avanza",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "65000",
//       "max_liter": "70",
//       "gear": "A",
//       "product_id": "493",
//       "license": "กด 9253",
//       "release_date": "2012-07-19T00:00:00.000Z",
//       "arrive_date": "2013-02-01T00:00:00.000Z",
//       "datetime": null,
//       "username": "FM29"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20231114/368693771/b/415e71b2-285a-428c-adab-9a6b5a750419.jpg",
//       "brand": "Toyota",
//       "color": "sliver",
//       "type": "pickup",
//       "price": 285000,
//       "model": "Hilux Vigo",
//       "engine": "2.5",
//       "fuel_type": "diesel",
//       "distance": "128326",
//       "max_liter": "65",
//       "gear": "A",
//       "product_id": "515",
//       "license": "ญม 8376",
//       "release_date": "2011-04-01T00:00:00.000Z",
//       "arrive_date": "2012-01-02T00:00:00.000Z",
//       "datetime": null,
//       "username": "JB14"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20231111/368748007/b/846ad986-f656-46b3-bd2e-b905d4969973.jpg",
//       "brand": "Mazda",
//       "color": "gray",
//       "type": "sedan",
//       "price": 479000,
//       "model": "CX-5",
//       "engine": "2.2",
//       "fuel_type": "diesel",
//       "distance": "170000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "522",
//       "license": "3ขภ 3096",
//       "release_date": "2016-03-05T00:00:00.000Z",
//       "arrive_date": "2016-04-16T00:00:00.000Z",
//       "datetime": null,
//       "username": "SR4"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240316/369283000/m/f074f5a9-e9fe-40f3-b92c-45099df742cc.jpg",
//       "brand": "Toyota",
//       "color": "gray",
//       "type": "minivan",
//       "price": 589000,
//       "model": "Estima",
//       "engine": "2.4",
//       "fuel_type": "benzene",
//       "distance": "210403",
//       "max_liter": "45",
//       "gear": "A",
//       "product_id": "58",
//       "license": "กข 6444",
//       "release_date": "2012-07-09T00:00:00.000Z",
//       "arrive_date": "2012-08-10T00:00:00.000Z",
//       "datetime": null,
//       "username": "MS26"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240118/369033990/m/b8db9d9f-8dce-4756-8587-4f948890c3b3.jpg",
//       "brand": "MG",
//       "color": "white",
//       "type": "sedan",
//       "price": 288000,
//       "model": "GS",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "197000",
//       "max_liter": "50",
//       "gear": "A",
//       "product_id": "59",
//       "license": "3ขต 8320",
//       "release_date": "2018-05-28T00:00:00.000Z",
//       "arrive_date": "2019-08-01T00:00:00.000Z",
//       "datetime": null,
//       "username": "DD9"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240323/369330144/m/ecbeb5bd-8a5e-4fbf-9788-b7b222498eae.jpg",
//       "brand": "Toyota",
//       "color": "white",
//       "type": "hatchback",
//       "price": 450000,
//       "model": "Fortuner",
//       "engine": "3.0",
//       "fuel_type": "diesel",
//       "distance": "280000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "644",
//       "license": "ขฉ 2224",
//       "release_date": "2010-05-17T00:00:00.000Z",
//       "arrive_date": "2010-08-26T00:00:00.000Z",
//       "datetime": null,
//       "username": "AJ28"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240227/369190296/m/2746cfde-b220-4aa7-8d90-b4b8e215128f.jpg",
//       "brand": "Kia",
//       "color": "white",
//       "type": "sedan",
//       "price": 1290000,
//       "model": "Grand Carnival",
//       "engine": "2.2",
//       "fuel_type": "diesel",
//       "distance": "70000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "645",
//       "license": "บ 0603",
//       "release_date": "2019-03-08T00:00:00.000Z",
//       "arrive_date": "2019-08-03T00:00:00.000Z",
//       "datetime": null,
//       "username": "CC13"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20230710/368129888/m/ff6c1fc8-039a-4f55-b8f5-12ab9014b1c4.jpg",
//       "brand": "Toyota",
//       "color": "black",
//       "type": "minivan",
//       "price": 448000,
//       "model": "Alphard",
//       "engine": "2.4",
//       "fuel_type": "benzene",
//       "distance": "270000",
//       "max_liter": "53",
//       "gear": "A",
//       "product_id": "717",
//       "license": "ษณ 5104",
//       "release_date": "2003-10-04T00:00:00.000Z",
//       "arrive_date": "2003-12-10T00:00:00.000Z",
//       "datetime": null,
//       "username": "RB27"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20231208/368553478/b/2f06558c-08b6-4833-9463-81fbacf2a8ff.jpg",
//       "brand": "Ford",
//       "color": "black",
//       "type": "pickup",
//       "price": 679000,
//       "model": "Everest",
//       "engine": "3.2",
//       "fuel_type": "diesel",
//       "distance": "10000",
//       "max_liter": "50",
//       "gear": "A",
//       "product_id": "740",
//       "license": "5กผ 4811",
//       "release_date": "2016-10-02T00:00:00.000Z",
//       "arrive_date": "2017-03-07T00:00:00.000Z",
//       "datetime": null,
//       "username": "DS21"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20230719/368130555/m/c666ecf8-17dd-4538-a93c-ea463c739dd1.jpg",
//       "brand": "Mini",
//       "color": "blue",
//       "type": "micro",
//       "price": 395000,
//       "model": "ONE",
//       "engine": "1.6",
//       "fuel_type": "benzene",
//       "distance": "115000",
//       "max_liter": "45",
//       "gear": "A",
//       "product_id": "78",
//       "license": "ญฬ 526",
//       "release_date": "2004-01-17T00:00:00.000Z",
//       "arrive_date": "2004-11-05T00:00:00.000Z",
//       "datetime": null,
//       "username": "KH18"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240331/369370359/b/2ff7a023-dbd8-4302-9cee-5e5231c28b95.jpg",
//       "brand": "Honda",
//       "color": "white",
//       "type": "sedan",
//       "price": 669000,
//       "model": "Civic",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "72807",
//       "max_liter": "55",
//       "gear": "A",
//       "product_id": "82",
//       "license": "7กพ 9103",
//       "release_date": "2018-10-12T00:00:00.000Z",
//       "arrive_date": "2019-01-15T00:00:00.000Z",
//       "datetime": null,
//       "username": "MG25"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240306/369232372/b/143fa02a-f3bc-4bd2-8cec-403276e48757.jpg",
//       "brand": "Mini",
//       "color": "green",
//       "type": "micro",
//       "price": 3090000,
//       "model": "Convertible",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "0",
//       "max_liter": "55",
//       "gear": "A",
//       "product_id": "831",
//       "license": "ลข 3661",
//       "release_date": "2024-01-31T00:00:00.000Z",
//       "arrive_date": "2024-02-06T00:00:00.000Z",
//       "datetime": null,
//       "username": "GM20"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240316/369280934/b/7a197a74-4bf5-42a3-ba59-b51acbde8889.jpg",
//       "brand": "Volvo",
//       "color": "black",
//       "type": "sedan",
//       "price": 228000,
//       "model": "V70",
//       "engine": "2.4",
//       "fuel_type": "benzene",
//       "distance": "380000",
//       "max_liter": "70",
//       "gear": "A",
//       "product_id": "877",
//       "license": "2ขต 5382",
//       "release_date": "2004-03-02T00:00:00.000Z",
//       "arrive_date": "2005-01-02T00:00:00.000Z",
//       "datetime": null,
//       "username": "BB12"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240116/368682831/b/c5e08e88-2d7f-446f-baa1-203c769ce48b.jpg",
//       "brand": "Mini",
//       "color": "yellow",
//       "type": "micro",
//       "price": 515000,
//       "model": "Hatch Cooper",
//       "engine": "1.6",
//       "fuel_type": "benzene",
//       "distance": "108684",
//       "max_liter": "45",
//       "gear": "A",
//       "product_id": "892",
//       "license": "1ขผ 668",
//       "release_date": "2020-11-13T00:00:00.000Z",
//       "arrive_date": "2020-12-05T00:00:00.000Z",
//       "datetime": null,
//       "username": "EM19"
//   }
// ]
router.get("/api/v1/car", (req, res) => {
  connection.query(`SELECT * FROM car`, function (err, results) {
    if (err) console.log(err);
    console.log(results);
    res.send(results);
  });
});

// Testing Get a car by product id #1
// method: GET
// URL: /api/v1/car/166
// body: 
// result: 
// [
//   {
//       "image": "https://img.kaidee.com/prd/20240317/369286661/m/3e139b7d-fbaa-419a-8f51-2af31a75bdbc.jpg",
//       "brand": "Lexus",
//       "color": "black",
//       "type": "minivan",
//       "price": 679000,
//       "model": "-",
//       "engine": "2.5",
//       "fuel_type": "hybrid",
//       "distance": "32000",
//       "max_liter": "56",
//       "gear": "A",
//       "product_id": "166",
//       "license": "ล 6358",
//       "release_date": "2021-08-07T00:00:00.000Z",
//       "arrive_date": "2022-01-04T00:00:00.000Z",
//       "datetime": null,
//       "username": "JA22"
//   }
// ]
// Testing Get a car by product id #2
// method: GET
// URL: /api/v1/car/ohnoIwritethewrongpruductid
// body: 
// result: 
// []
router.get("/api/v1/car/:id", (req, res) => {
  connection.query(
    `SELECT * FROM car WHERE product_id = ?`,
    [req.params.id],
    function (err, results) {
      if (err) console.log(err);
      console.log(results);
      res.send(results);
    }
  );
});

// Testing Get all brands of cars #1
// method: GET
// URL: /api/v1/brand
// body: 
// result: 
// [
//   {
//     "brand": "Audi"
// },
// {
//     "brand": "BMW"
// },
// {
//     "brand": "Ford"
// },
// {
//     "brand": "Honda"
// },
// {
//     "brand": "Kia"
// },
// {
//     "brand": "Lexus"
// },
// {
//     "brand": "Mazda"
// },
// {
//     "brand": "MG"
// },
// {
//     "brand": "Mini"
// },
// {
//     "brand": "Mitsubishi"
// },
// {
//     "brand": "Nissan"
// },
// {
//     "brand": "Peugeot"
// },
// {
//     "brand": "Porsche"
// },
// {
//     "brand": "Toyota"
// },
// {
//     "brand": "Volkswagen"
// },
// {
//     "brand": "Volvo"
// }
// ]
// Testing Get all brands of cars #2
// method: GET
// URL: /api/v1/brand
// body: 
// result: 
// [
//   {
//     "brand": "Audi"
// },
// {
//     "brand": "BMW"
// },
// {
//     "brand": "Ford"
// },
// {
//     "brand": "Honda"
// },
// {
//     "brand": "Kia"
// },
// {
//     "brand": "Lexus"
// },
// {
//     "brand": "Mazda"
// },
// {
//     "brand": "MG"
// },
// {
//     "brand": "Mini"
// },
// {
//     "brand": "Mitsubishi"
// },
// {
//     "brand": "Nissan"
// },
// {
//     "brand": "Peugeot"
// },
// {
//     "brand": "Porsche"
// },
// {
//     "brand": "Toyota"
// },
// {
//     "brand": "Volkswagen"
// },
// {
//     "brand": "Volvo"
// }
// ]
router.get("/api/v1/brand", (req, res) => {
  connection.query(
    `SELECT DISTINCT(brand) FROM car ORDER BY brand;`,
    function (err, results) {
      if (err) console.log(err);
      console.log(results);
      res.send(results);
    }
  );
});

// Testing Get all engines of cars #1
// method: GET
// URL: /api/v1/engine
// body: 
// result: 
// [
//   {
//       "engine": "1.2"
//   },
//   {
//       "engine": "1.5"
//   },
//   {
//       "engine": "1.6"
//   },
//   {
//       "engine": "1.8"
//   },
//   {
//       "engine": "2.0"
//   },
//   {
//       "engine": "2.2"
//   },
//   {
//       "engine": "2.4"
//   },
//   {
//       "engine": "2.5"
//   },
//   {
//       "engine": "3.0"
//   },
//   {
//       "engine": "3.2"
//   },
//   {
//       "engine": "4.0"
//   }
// ]
// Testing Get all engines of cars #2
// method: GET
// URL: /api/v1/engine
// body: 
// result: 
// [
//   {
//       "engine": "1.2"
//   },
//   {
//       "engine": "1.5"
//   },
//   {
//       "engine": "1.6"
//   },
//   {
//       "engine": "1.8"
//   },
//   {
//       "engine": "2.0"
//   },
//   {
//       "engine": "2.2"
//   },
//   {
//       "engine": "2.4"
//   },
//   {
//       "engine": "2.5"
//   },
//   {
//       "engine": "3.0"
//   },
//   {
//       "engine": "3.2"
//   },
//   {
//       "engine": "4.0"
//   }
// ]
router.get("/api/v1/engine", (req, res) => {
  connection.query(
    `SELECT DISTINCT(engine) FROM car ORDER BY engine;`,
    function (err, results) {
      if (err) console.log(err);
      console.log(results);
      res.send(results);
    }
  );
});

// Testing Get all fuels of cars #1
// method: GET
// URL: /api/v1/fuel
// body: 
// result: 
// [
//   {
//       "fuel_type": "benzene"
//   },
//   {
//       "fuel_type": "diesel"
//   },
//   {
//       "fuel_type": "hybrid"
//   }
// ]
// Testing Get all fuels of cars #2
// method: GET
// URL: /api/v1/fuel
// body: 
// result: 
// [
//   {
//       "fuel_type": "benzene"
//   },
//   {
//       "fuel_type": "diesel"
//   },
//   {
//       "fuel_type": "hybrid"
//   }
// ]
router.get("/api/v1/fuel", (req, res) => {
  connection.query(
    `SELECT DISTINCT(fuel_type) FROM car ORDER BY fuel_type;`,
    function (err, results) {
      if (err) console.log(err);
      console.log(results);
      res.send(results);
    }
  );
});

// Testing Search Cars #1
// method: GET
// URL: /api/v1/search?model=&brand=&engine=&fuel=hybrid
// body: 
// result: 
// [
//   {
//       "image": "https://img.kaidee.com/prd/20240317/369286661/m/3e139b7d-fbaa-419a-8f51-2af31a75bdbc.jpg",
//       "brand": "Lexus",
//       "color": "black",
//       "type": "minivan",
//       "price": 679000,
//       "model": "-",
//       "engine": "2.5",
//       "fuel_type": "hybrid",
//       "distance": "32000",
//       "max_liter": "56",
//       "gear": "A",
//       "product_id": "166",
//       "license": "ล 6358",
//       "release_date": "2021-08-07T00:00:00.000Z",
//       "arrive_date": "2022-01-04T00:00:00.000Z",
//       "datetime": null,
//       "username": "JA22"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240328/369351508/b/1c193e85-a3ed-49aa-bc33-2d8ec78ce9cf.jpg",
//       "brand": "Porsche",
//       "color": "black",
//       "type": "sedan",
//       "price": 2350000,
//       "model": "Cayenne",
//       "engine": "3.0",
//       "fuel_type": "hybrid",
//       "distance": "78000",
//       "max_liter": "45",
//       "gear": "A",
//       "product_id": "214",
//       "license": "ศ 9569",
//       "release_date": "2016-05-02T00:00:00.000Z",
//       "arrive_date": "2016-12-28T00:00:00.000Z",
//       "datetime": null,
//       "username": "JS15"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240304/369220975/b/c5b93d5f-b051-4dc9-8f19-d2daba151f19.jpg",
//       "brand": "Nissan",
//       "color": "orange",
//       "type": "sedan",
//       "price": 699000,
//       "model": "Kicks",
//       "engine": "1.2",
//       "fuel_type": "hybrid",
//       "distance": "30799",
//       "max_liter": "50",
//       "gear": "A",
//       "product_id": "302",
//       "license": "ขก 5746",
//       "release_date": "2022-03-05T00:00:00.000Z",
//       "arrive_date": "2023-05-16T00:00:00.000Z",
//       "datetime": null,
//       "username": "EG3"
//   }
// ]
// Testing Search Cars #2
// method: GET
// URL: /api/v1/search?model=&brand=&engine=&fuel=
// body: 
// result: 
// [
//   {
//       "image": "https://img.kaidee.com/prd/20240306/368958058/m/2ac86490-e308-4d53-92f1-adb76158c1c6.jpg",
//       "brand": "Mitsubishi",
//       "color": "black",
//       "type": "SUV",
//       "price": 359000,
//       "model": "Pajero Sport",
//       "engine": "2.5",
//       "fuel_type": "diesel",
//       "distance": "160000",
//       "max_liter": "70",
//       "gear": "A",
//       "product_id": "122",
//       "license": "2กด 8719",
//       "release_date": "2013-05-22T00:00:00.000Z",
//       "arrive_date": "2015-11-23T00:00:00.000Z",
//       "datetime": null,
//       "username": "JC1"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240213/369128363/b/5c6b78f1-4ca8-40df-ae72-f616a65472b5.jpg",
//       "brand": "Volvo",
//       "color": "black",
//       "type": "sedan",
//       "price": 268000,
//       "model": "S60",
//       "engine": "1.6",
//       "fuel_type": "benzene",
//       "distance": "120000",
//       "max_liter": "80",
//       "gear": "A",
//       "product_id": "124",
//       "license": "3กล 1951",
//       "release_date": "2012-08-05T00:00:00.000Z",
//       "arrive_date": "2013-02-01T00:00:00.000Z",
//       "datetime": null,
//       "username": "VC11"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240317/369286661/m/3e139b7d-fbaa-419a-8f51-2af31a75bdbc.jpg",
//       "brand": "Lexus",
//       "color": "black",
//       "type": "minivan",
//       "price": 679000,
//       "model": "-",
//       "engine": "2.5",
//       "fuel_type": "hybrid",
//       "distance": "32000",
//       "max_liter": "56",
//       "gear": "A",
//       "product_id": "166",
//       "license": "ล 6358",
//       "release_date": "2021-08-07T00:00:00.000Z",
//       "arrive_date": "2022-01-04T00:00:00.000Z",
//       "datetime": null,
//       "username": "JA22"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240328/369351508/b/1c193e85-a3ed-49aa-bc33-2d8ec78ce9cf.jpg",
//       "brand": "Porsche",
//       "color": "black",
//       "type": "sedan",
//       "price": 2350000,
//       "model": "Cayenne",
//       "engine": "3.0",
//       "fuel_type": "hybrid",
//       "distance": "78000",
//       "max_liter": "45",
//       "gear": "A",
//       "product_id": "214",
//       "license": "ศ 9569",
//       "release_date": "2016-05-02T00:00:00.000Z",
//       "arrive_date": "2016-12-28T00:00:00.000Z",
//       "datetime": null,
//       "username": "JS15"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20230825/368308375/b/2b71b8c1-7faa-4ab4-b978-9848594f4258.jpg",
//       "brand": "Volkswagen",
//       "color": "gray",
//       "type": "minivan",
//       "price": 229000,
//       "model": "Caravelle",
//       "engine": "3.2",
//       "fuel_type": "benzene",
//       "distance": "220000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "26",
//       "license": "ฮล 8415",
//       "release_date": "2005-10-12T00:00:00.000Z",
//       "arrive_date": "2006-05-03T00:00:00.000Z",
//       "datetime": null,
//       "username": "RR23"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20231023/366848216/b/077a4553-84d8-4197-9f16-13acda45c1c6.jpg",
//       "brand": "Audi",
//       "color": "gray",
//       "type": "sedan",
//       "price": 2678000,
//       "model": "Audi TT",
//       "engine": "2.0",
//       "fuel_type": "benzene",
//       "distance": "30000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "268",
//       "license": "4ขจ 2776",
//       "release_date": "2020-08-13T00:00:00.000Z",
//       "arrive_date": "2021-03-06T00:00:00.000Z",
//       "datetime": null,
//       "username": "BB6"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240304/369220975/b/c5b93d5f-b051-4dc9-8f19-d2daba151f19.jpg",
//       "brand": "Nissan",
//       "color": "orange",
//       "type": "sedan",
//       "price": 699000,
//       "model": "Kicks",
//       "engine": "1.2",
//       "fuel_type": "hybrid",
//       "distance": "30799",
//       "max_liter": "50",
//       "gear": "A",
//       "product_id": "302",
//       "license": "ขก 5746",
//       "release_date": "2022-03-05T00:00:00.000Z",
//       "arrive_date": "2023-05-16T00:00:00.000Z",
//       "datetime": null,
//       "username": "EG3"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240215/369134672/m/565bc140-2371-4329-aa6b-db7b8d89c65d.jpg",
//       "brand": "Audi",
//       "color": "gray",
//       "type": "sedan",
//       "price": 7990000,
//       "model": "Audi RS6",
//       "engine": "4.0",
//       "fuel_type": "benzene",
//       "distance": "10000",
//       "max_liter": "40",
//       "gear": "A",
//       "product_id": "31",
//       "license": "ฐต 77",
//       "release_date": "2022-04-20T00:00:00.000Z",
//       "arrive_date": "2020-10-08T00:00:00.000Z",
//       "datetime": null,
//       "username": "MC7"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20231023/366848216/b/077a4553-84d8-4197-9f16-13acda45c1c6.jpg",
//       "brand": "Audi",
//       "color": "sliver",
//       "type": "sedan",
//       "price": 755000,
//       "model": "Audi TT",
//       "engine": "2.0",
//       "fuel_type": "benzene",
//       "distance": "92000",
//       "max_liter": "50",
//       "gear": "A",
//       "product_id": "356",
//       "license": "8กฉ 2214",
//       "release_date": "2007-04-05T00:00:00.000Z",
//       "arrive_date": "2008-02-10T00:00:00.000Z",
//       "datetime": null,
//       "username": "RB5"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240306/369233989/b/85803800-aa8c-4a29-bfae-bd1bd12820fa.jpg",
//       "brand": "BMW",
//       "color": "black",
//       "type": "sedan",
//       "price": 839000,
//       "model": "X1",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "91000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "388",
//       "license": "6กณ 6003",
//       "release_date": "2017-10-14T00:00:00.000Z",
//       "arrive_date": "2018-02-18T00:00:00.000Z",
//       "datetime": null,
//       "username": "CC16"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240321/369319371/b/dfa41548-778d-4fbb-9408-07c39c14a068.jpg",
//       "brand": "BMW",
//       "color": "white",
//       "type": "sedan",
//       "price": 798000,
//       "model": "X1",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "101000",
//       "max_liter": "55",
//       "gear": "A",
//       "product_id": "420",
//       "license": "ศร 7",
//       "release_date": "2018-04-08T00:00:00.000Z",
//       "arrive_date": "2018-12-10T00:00:00.000Z",
//       "datetime": null,
//       "username": "CP17"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240312/369261310/m/5dc9145d-bb08-4bd2-9c02-7c6c7744f7d6.jpg",
//       "brand": "MG",
//       "color": "black",
//       "type": "sedan",
//       "price": 299000,
//       "model": "GS",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "120000",
//       "max_liter": "50",
//       "gear": "A",
//       "product_id": "44",
//       "license": "ฆจ 252",
//       "release_date": "2018-07-22T00:00:00.000Z",
//       "arrive_date": "2019-05-09T00:00:00.000Z",
//       "datetime": null,
//       "username": "WG10"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240326/369344996/m/a0ea8eee-a87b-4c93-a68d-55a21f8c31ce.jpg",
//       "brand": "Honda",
//       "color": "white",
//       "type": "sedan",
//       "price": 459000,
//       "model": "HR-V",
//       "engine": "1.8",
//       "fuel_type": "benzene",
//       "distance": "90000",
//       "max_liter": "65",
//       "gear": "A",
//       "product_id": "456",
//       "license": "ขล 8853",
//       "release_date": "2018-10-22T00:00:00.000Z",
//       "arrive_date": "2026-11-20T00:00:00.000Z",
//       "datetime": null,
//       "username": "JL0"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240323/369328510/m/23d4d1d2-5f97-4f96-aad1-a6aaefee3a0f.jpg",
//       "brand": "Peugeot",
//       "color": "black",
//       "type": "minivan",
//       "price": 449000,
//       "model": "Expert",
//       "engine": "2.0",
//       "fuel_type": "diesel",
//       "distance": "145000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "477",
//       "license": "ฮฐ 4655",
//       "release_date": "2016-04-20T00:00:00.000Z",
//       "arrive_date": "2016-10-13T00:00:00.000Z",
//       "datetime": null,
//       "username": "AG24"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20230731/368211693/m/e9f9b80e-b79d-40c4-86a6-6163a397f11a.jpg",
//       "brand": "Toyota",
//       "color": "gray",
//       "type": "minivan",
//       "price": 248000,
//       "model": "Avanza",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "65000",
//       "max_liter": "70",
//       "gear": "A",
//       "product_id": "493",
//       "license": "กด 9253",
//       "release_date": "2012-07-19T00:00:00.000Z",
//       "arrive_date": "2013-02-01T00:00:00.000Z",
//       "datetime": null,
//       "username": "FM29"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20231114/368693771/b/415e71b2-285a-428c-adab-9a6b5a750419.jpg",
//       "brand": "Toyota",
//       "color": "sliver",
//       "type": "pickup",
//       "price": 285000,
//       "model": "Hilux Vigo",
//       "engine": "2.5",
//       "fuel_type": "diesel",
//       "distance": "128326",
//       "max_liter": "65",
//       "gear": "A",
//       "product_id": "515",
//       "license": "ญม 8376",
//       "release_date": "2011-04-01T00:00:00.000Z",
//       "arrive_date": "2012-01-02T00:00:00.000Z",
//       "datetime": null,
//       "username": "JB14"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20231111/368748007/b/846ad986-f656-46b3-bd2e-b905d4969973.jpg",
//       "brand": "Mazda",
//       "color": "gray",
//       "type": "sedan",
//       "price": 479000,
//       "model": "CX-5",
//       "engine": "2.2",
//       "fuel_type": "diesel",
//       "distance": "170000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "522",
//       "license": "3ขภ 3096",
//       "release_date": "2016-03-05T00:00:00.000Z",
//       "arrive_date": "2016-04-16T00:00:00.000Z",
//       "datetime": null,
//       "username": "SR4"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240316/369283000/m/f074f5a9-e9fe-40f3-b92c-45099df742cc.jpg",
//       "brand": "Toyota",
//       "color": "gray",
//       "type": "minivan",
//       "price": 589000,
//       "model": "Estima",
//       "engine": "2.4",
//       "fuel_type": "benzene",
//       "distance": "210403",
//       "max_liter": "45",
//       "gear": "A",
//       "product_id": "58",
//       "license": "กข 6444",
//       "release_date": "2012-07-09T00:00:00.000Z",
//       "arrive_date": "2012-08-10T00:00:00.000Z",
//       "datetime": null,
//       "username": "MS26"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240118/369033990/m/b8db9d9f-8dce-4756-8587-4f948890c3b3.jpg",
//       "brand": "MG",
//       "color": "white",
//       "type": "sedan",
//       "price": 288000,
//       "model": "GS",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "197000",
//       "max_liter": "50",
//       "gear": "A",
//       "product_id": "59",
//       "license": "3ขต 8320",
//       "release_date": "2018-05-28T00:00:00.000Z",
//       "arrive_date": "2019-08-01T00:00:00.000Z",
//       "datetime": null,
//       "username": "DD9"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240323/369330144/m/ecbeb5bd-8a5e-4fbf-9788-b7b222498eae.jpg",
//       "brand": "Toyota",
//       "color": "white",
//       "type": "hatchback",
//       "price": 450000,
//       "model": "Fortuner",
//       "engine": "3.0",
//       "fuel_type": "diesel",
//       "distance": "280000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "644",
//       "license": "ขฉ 2224",
//       "release_date": "2010-05-17T00:00:00.000Z",
//       "arrive_date": "2010-08-26T00:00:00.000Z",
//       "datetime": null,
//       "username": "AJ28"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240227/369190296/m/2746cfde-b220-4aa7-8d90-b4b8e215128f.jpg",
//       "brand": "Kia",
//       "color": "white",
//       "type": "sedan",
//       "price": 1290000,
//       "model": "Grand Carnival",
//       "engine": "2.2",
//       "fuel_type": "diesel",
//       "distance": "70000",
//       "max_liter": "60",
//       "gear": "A",
//       "product_id": "645",
//       "license": "บ 0603",
//       "release_date": "2019-03-08T00:00:00.000Z",
//       "arrive_date": "2019-08-03T00:00:00.000Z",
//       "datetime": null,
//       "username": "CC13"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20230710/368129888/m/ff6c1fc8-039a-4f55-b8f5-12ab9014b1c4.jpg",
//       "brand": "Toyota",
//       "color": "black",
//       "type": "minivan",
//       "price": 448000,
//       "model": "Alphard",
//       "engine": "2.4",
//       "fuel_type": "benzene",
//       "distance": "270000",
//       "max_liter": "53",
//       "gear": "A",
//       "product_id": "717",
//       "license": "ษณ 5104",
//       "release_date": "2003-10-04T00:00:00.000Z",
//       "arrive_date": "2003-12-10T00:00:00.000Z",
//       "datetime": null,
//       "username": "RB27"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20231208/368553478/b/2f06558c-08b6-4833-9463-81fbacf2a8ff.jpg",
//       "brand": "Ford",
//       "color": "black",
//       "type": "pickup",
//       "price": 679000,
//       "model": "Everest",
//       "engine": "3.2",
//       "fuel_type": "diesel",
//       "distance": "10000",
//       "max_liter": "50",
//       "gear": "A",
//       "product_id": "740",
//       "license": "5กผ 4811",
//       "release_date": "2016-10-02T00:00:00.000Z",
//       "arrive_date": "2017-03-07T00:00:00.000Z",
//       "datetime": null,
//       "username": "DS21"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20230719/368130555/m/c666ecf8-17dd-4538-a93c-ea463c739dd1.jpg",
//       "brand": "Mini",
//       "color": "blue",
//       "type": "micro",
//       "price": 395000,
//       "model": "ONE",
//       "engine": "1.6",
//       "fuel_type": "benzene",
//       "distance": "115000",
//       "max_liter": "45",
//       "gear": "A",
//       "product_id": "78",
//       "license": "ญฬ 526",
//       "release_date": "2004-01-17T00:00:00.000Z",
//       "arrive_date": "2004-11-05T00:00:00.000Z",
//       "datetime": null,
//       "username": "KH18"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240331/369370359/b/2ff7a023-dbd8-4302-9cee-5e5231c28b95.jpg",
//       "brand": "Honda",
//       "color": "white",
//       "type": "sedan",
//       "price": 669000,
//       "model": "Civic",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "72807",
//       "max_liter": "55",
//       "gear": "A",
//       "product_id": "82",
//       "license": "7กพ 9103",
//       "release_date": "2018-10-12T00:00:00.000Z",
//       "arrive_date": "2019-01-15T00:00:00.000Z",
//       "datetime": null,
//       "username": "MG25"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240306/369232372/b/143fa02a-f3bc-4bd2-8cec-403276e48757.jpg",
//       "brand": "Mini",
//       "color": "green",
//       "type": "micro",
//       "price": 3090000,
//       "model": "Convertible",
//       "engine": "1.5",
//       "fuel_type": "benzene",
//       "distance": "0",
//       "max_liter": "55",
//       "gear": "A",
//       "product_id": "831",
//       "license": "ลข 3661",
//       "release_date": "2024-01-31T00:00:00.000Z",
//       "arrive_date": "2024-02-06T00:00:00.000Z",
//       "datetime": null,
//       "username": "GM20"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240316/369280934/b/7a197a74-4bf5-42a3-ba59-b51acbde8889.jpg",
//       "brand": "Volvo",
//       "color": "black",
//       "type": "sedan",
//       "price": 228000,
//       "model": "V70",
//       "engine": "2.4",
//       "fuel_type": "benzene",
//       "distance": "380000",
//       "max_liter": "70",
//       "gear": "A",
//       "product_id": "877",
//       "license": "2ขต 5382",
//       "release_date": "2004-03-02T00:00:00.000Z",
//       "arrive_date": "2005-01-02T00:00:00.000Z",
//       "datetime": null,
//       "username": "BB12"
//   },
//   {
//       "image": "https://img.kaidee.com/prd/20240116/368682831/b/c5e08e88-2d7f-446f-baa1-203c769ce48b.jpg",
//       "brand": "Mini",
//       "color": "yellow",
//       "type": "micro",
//       "price": 515000,
//       "model": "Hatch Cooper",
//       "engine": "1.6",
//       "fuel_type": "benzene",
//       "distance": "108684",
//       "max_liter": "45",
//       "gear": "A",
//       "product_id": "892",
//       "license": "1ขผ 668",
//       "release_date": "2020-11-13T00:00:00.000Z",
//       "arrive_date": "2020-12-05T00:00:00.000Z",
//       "datetime": null,
//       "username": "EM19"
//   }
// ]
router.get("/api/v1/search", (req, res) => {
  const { model, brand, engine, fuel } = req.query;
  let sql = "SELECT * FROM car WHERE 1=1";
  const params = [];

  if (model != "undefined") {
    sql += " AND model LIKE ?";
    params.push(`%${model}%`);
  }

  if (brand != "undefined") {
    sql += " AND brand LIKE ?";
    params.push(`%${brand}%`);
  }

  if (engine != "undefined") {
    sql += " AND engine LIKE ?";
    params.push(`%${engine}%`);
  }

  if (fuel != "undefined") {
    sql += " AND fuel_type LIKE ?";
    params.push(`%${fuel}%`);
  }
  sql += ";";
  connection.query(sql, params, function (err, results) {
    if (err) console.log(err);
    console.log(results);
    res.send(results);
  });
});

// Testing Delete Car #1
// method: DELETE
// URL: /api/v1/car
// body: 
// {
//   "product_id": 892
// }
// result: 
// {
//   "fieldCount": 0,
//   "affectedRows": 1,
//   "insertId": 0,
//   "info": "",
//   "serverStatus": 34,
//   "warningStatus": 0,
//   "changedRows": 0
// }
// Testing Delete Car #2
// method: DELETE
// URL: /api/v1/car
// body: 
// {
//   "product_id": null
// }
// result: 
// {
//   "fieldCount": 0,
//   "affectedRows": 0,
//   "insertId": 0,
//   "info": "",
//   "serverStatus": 2,
//   "warningStatus": 0,
//   "changedRows": 0
// }
router.delete("/api/v1/car", (req, res) => {
  const { product_id } = req.body;
  connection.query(
    `DELETE FROM car WHERE product_id = ?`,
    [product_id],
    function (err, results) {
      if (err) console.log(err);
      console.log(results);
      res.send(results);
    }
  );
});

// Not an API (a helper function)
function formatDate(dateString){
  const date = new Date(dateString);
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  console.log(formattedDate); // 2016-10-22
  return formattedDate;
}

// Testing Insert Car #1
// method: POST
// URL: /api/v1/car
// body: 
// {
//   "car": {
//     "image": "https://img.kaidee.com/prd/20240116/368682831/b/c5e08e88-2d7f-446f-baa1-203c769ce48b.jpg",
//     "brand": "Mini",
//     "color": "yellow",
//     "type": "micro",
//     "price": 515000,
//     "model": "Hatch Cooper",
//     "engine": "1.6",
//     "fuel_type": "benzene",
//     "distance": "108684",
//     "max_liter": "45",
//     "gear": "A",
//     "product_id": "892",
//     "license": "1ขผ 668",
//     "release_date": "2020-11-13T00:00:00.000Z",
//     "arrive_date": "2020-12-05T00:00:00.000Z",
//     "datetime": null,
//     "username": "EM19"
//    }
// }
// result: 
// Car updated successfully.
// Testing Insert Car #2
// method: POST
// URL: /api/v1/car
// body: 
// {
//   "car": {}
// }
// result: 
// Car updated successfully.
// An error occurred while updating the car.
router.post("/api/v1/car", (req, res) => {
  const car = req.body.car;
  connection.query(
    `INSERT INTO car (image, brand, color, type, price, model, engine, fuel_type, 
      distance, max_liter, gear, product_id, license, release_date, arrive_date, datetime, username) 
      VALUES (?, ?, ?, ?, ?, ?, ? ,?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      car.image, car.brand, car.color, car.type, car.price, car.model, car.engine, car.fuel_type, car.distance,
      car.max_liter, car.gear, car.product_id, car.license,
      formatDate(car.release_date),
      formatDate(car.arrive_date),
      car.datetime,
      car.username,
    ],
    function (err, results) {
      if (err){
        console.error(err);
        // Send an error response to the client
        return res.status(500).send("An error occurred while updating the car.");
      };
      console.log(results);
      // Send a success response to the client
      res.send("Car updated successfully.");
    }
  );
});

// Testing Insert Login Log #1
// method: POST
// URL: /api/v1/login_time
// body: 
// {
//   "time": "Tue Apr 23 2024 22:37:38 GMT+0700 (Indochina Time)",
//   "username": "PK16"
// }
// result: 
// Time is sent to sql successfully.
// -------------------------------------------------------------------------------
// Testing Insert Login Log #2
// method: POST
// URL: /api/v1/login_time
// body: 
// {
//   "time": "",
//   "username": "PK16"
// }
// result: 
// {
//   "code": "ER_TRUNCATED_WRONG_VALUE",
//   "errno": 1292,
//   "sqlState": "22007",
//   "sqlMessage": "Incorrect datetime value: 'NaN-NaN-NaN' for column 'datetime' at row 1",
//   "sql": "INSERT INTO login_infor (datetime, username) VALUES ('NaN-NaN-NaN', 'PK16')"
// }
router.post("/api/v1/login_time", (req, res) => {
  const time = req.body.time;
  const username = req.body.username;
  console.log(time + username);
  connection.query(
    `INSERT INTO login_infor (datetime, username) VALUES (?, ?)`,
    [
      formatDate(time),
      username,
    ],
    function (err, results) {
      if (err){
        console.error(err);
        // Send an error response to the client
        return res.status(500).send(err);
      };
      console.log(results);
      // Send a success response to the client
      res.send("Time is sent to sql successfully.");
    }
  );
});

// Testing Update Car Information #1
// method: PUT
// URL: /api/v1/car
// body: 
// {
//   "car": {
//       "image": "https://img.kaidee.com/prd/20240116/368682831/b/c5e08e88-2d7f-446f-baa1-203c769ce48b.jpg",
//       "brand": "Mini",
//       "color": "yellow",
//       "type": "micro",
//       "price": 520000,
//       "model": "Hatch Cooper",
//       "engine": "1.6",
//       "fuel_type": "benzene",
//       "distance": "108684",
//       "max_liter": "45",
//       "gear": "A",
//       "product_id": "892",
//       "license": "1ขผ 668",
//       "release_date": "2020-11-13T00:00:00.000Z",
//       "arrive_date": "2020-12-05T00:00:00.000Z",
//       "datetime": null,
//       "username": "EM19"
//   }
// }
// result: 
// Car updated successfully.
// Testing Update Car Information #1
// method: PUT
// URL: /api/v1/car
// body: 
// {
//   "car": {
//       "image": "https://img.kaidee.com/prd/20240116/368682831/b/c5e08e88-2d7f-446f-baa1-203c769ce48b.jpg",
//       "brand": "Mini",
//       "color": "yellow",
//       "type": "micro",
//       "price": 520000,
//       "model": "Hatch Cooper",
//       "engine": "1.6",
//       "fuel_type": "benzene",
//       "distance": "108684",
//       "max_liter": "45",
//       "gear": "WRONG_GEAR",
//       "product_id": "892",
//       "license": "1ขผ 668",
//       "release_date": "2020-11-13T00:00:00.000Z",
//       "arrive_date": "2020-12-05T00:00:00.000Z",
//       "datetime": null,
//       "username": "EM19"
//   }
// }
// result: 
// An error occurred while updating the car.
router.put("/api/v1/car", (req, res) => {
  const car = req.body.car;
  car.release_date = formatDate(car.release_date);
  car.arrive_date = formatDate(car.arrive_date);
  connection.query(
    `UPDATE car
    SET ?
    WHERE product_id = ?;`,
    [
      car,
      car.product_id,
    ],
    function (err, results) {
      if (err){
        console.error(err);
        // Send an error response to the client
        return res.status(500).send("An error occurred while updating the car.");
      };
      console.log(results);
      // Send a success response to the client
      res.send("Car updated successfully.");
    }
  );
});

// Section B: Login

// Testing Login #1
// method: POST
// URL: /api/v1/login
// body: 
// {
//   "username": "PK16",
//   "password": "poon12345"
// }
// result: 
// {
//   "pass": true,
//   "username": "PK16",
//   "password": "poon12345"
// }
// Testing Login #2
// method: POST
// URL: /api/v1/login
// body: 
// {
//   "username": "PK16",
//   "password": "WRONG_PASSWORD"
// }
// result: 
// {
//   "pass": false,
//   "username": null,
//   "password": null
// }
router.post("/api/v1/login/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  connection.query(
    `SELECT COUNT(*) AS count FROM account WHERE username = ? AND password = ?`,
    [username, password],
    function (err, results) {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
      console.log(results);
      if (results[0].count === 1) {
        res.json({
          pass: true,
          username: String(username),
          password: String(password),
        });
      } else {
        res.json({ pass: false, username: null, password: null });
      }
    }
  );
});

// Section C: Users

// Testing Get all users information #1
// method: GET
// URL: /api/v1/user
// body:
// result: 
// [
//   {
//       "password": "",
//       "birth_date": "2024-04-23T00:00:00.000Z",
//       "lname": "",
//       "fname": "",
//       "email": "",
//       "username": "",
//       "citizen_number": "",
//       "phone_number": ""
//   },
//   {
//       "password": "EXSEWHHB.4",
//       "birth_date": "1968-12-06T00:00:00.000Z",
//       "lname": "Greyson",
//       "fname": "Mark",
//       "email": "AG24@gmail.com",
//       "username": "AG24",
//       "citizen_number": "1359318011244",
//       "phone_number": "0813593180"
//   },
//   {
//       "password": "uwJomMnw%$2",
//       "birth_date": "1973-03-09T00:00:00.000Z",
//       "lname": "Justiniano",
//       "fname": "Anthony",
//       "email": "AJ28@gmail.com",
//       "username": "AJ28",
//       "citizen_number": "1359589760673",
//       "phone_number": "0813595897"
//   },
//   {
//       "password": "iZdPfRtNk$6",
//       "birth_date": "1989-12-17T00:00:00.000Z",
//       "lname": "Beck",
//       "fname": "Bruce",
//       "email": "BB12@gmail.com",
//       "username": "BB12",
//       "citizen_number": "1359019096856",
//       "phone_number": "0813590190"
//   },
//   {
//       "password": "j=072254081",
//       "birth_date": "1981-04-14T00:00:00.000Z",
//       "lname": "Burke",
//       "fname": "Brenda",
//       "email": "BB6@gmail.com",
//       "username": "BB6",
//       "citizen_number": "1358911448759",
//       "phone_number": "0813589114"
//   },
//   {
//       "password": "GhMKiNL,3506",
//       "birth_date": "1959-04-01T00:00:00.000Z",
//       "lname": "Chauarria",
//       "fname": "Cindy",
//       "email": "CC13@gmail.com",
//       "username": "CC13",
//       "citizen_number": "1359220860087",
//       "phone_number": "0813592208"
//   },
//   {
//       "password": "FkkMFA&6",
//       "birth_date": "1954-07-09T00:00:00.000Z",
//       "lname": "Copeland",
//       "fname": "Cori",
//       "email": "CC16@gmail.com",
//       "username": "CC16",
//       "citizen_number": "1359253904569",
//       "phone_number": "0813592539"
//   },
//   {
//       "password": "VFxR@618811",
//       "birth_date": "1977-06-10T00:00:00.000Z",
//       "lname": "Howell",
//       "fname": "Craig",
//       "email": "CH2@gmail.com",
//       "username": "CH2",
//       "citizen_number": "1358795898446",
//       "phone_number": "0813587958"
//   },
//   {
//       "password": "fBObrS.%388",
//       "birth_date": "1992-04-03T00:00:00.000Z",
//       "lname": "Phelps",
//       "fname": "Colette",
//       "email": "CP17@gmail.com",
//       "username": "CP17",
//       "citizen_number": "1359262324146",
//       "phone_number": "0813592623"
//   },
//   {
//       "password": "eyjJpDJ*4",
//       "birth_date": "1995-02-27T00:00:00.000Z",
//       "lname": "Dixon",
//       "fname": "David",
//       "email": "DD9@gmail.com",
//       "username": "DD9",
//       "citizen_number": "1358931303337",
//       "phone_number": "0813589313"
//   },
//   {
//       "password": "cBPKLG?6",
//       "birth_date": "1973-08-26T00:00:00.000Z",
//       "lname": "Smith",
//       "fname": "Derrick",
//       "email": "DS21@gmail.com",
//       "username": "DS21",
//       "citizen_number": "1359286230452",
//       "phone_number": "0813592862"
//   },
//   {
//       "password": "oB#506",
//       "birth_date": "1998-09-06T00:00:00.000Z",
//       "lname": "Gerlach",
//       "fname": "Elizabeth",
//       "email": "EG3@gmail.com",
//       "username": "EG3",
//       "citizen_number": "1358819721562",
//       "phone_number": "0813588197"
//   },
//   {
//       "password": "ZYCzEn=87",
//       "birth_date": "1966-03-17T00:00:00.000Z",
//       "lname": "Mcdonald",
//       "fname": "Erika",
//       "email": "EM19@gmail.com",
//       "username": "EM19",
//       "citizen_number": "1359278306843",
//       "phone_number": "0813592783"
//   },
//   {
//       "password": "jfeOf=8",
//       "birth_date": "1996-10-09T00:00:00.000Z",
//       "lname": "Mcconnell",
//       "fname": "Frank",
//       "email": "FM29@gmail.com",
//       "username": "FM29",
//       "citizen_number": "1359597700919",
//       "phone_number": "0813595977"
//   },
//   {
//       "password": "nwCmd@,,2",
//       "birth_date": "1987-11-25T00:00:00.000Z",
//       "lname": "Longoria",
//       "fname": "Gary",
//       "email": "GL8@gmail.com",
//       "username": "GL8",
//       "citizen_number": "1358931301752",
//       "phone_number": "0813589313"
//   },
//   {
//       "password": "XEoodsDmc?1",
//       "birth_date": "1959-06-27T00:00:00.000Z",
//       "lname": "Mason",
//       "fname": "Gina",
//       "email": "GM20@gmail.com",
//       "username": "GM20",
//       "citizen_number": "1359286228867",
//       "phone_number": "0813592862"
//   },
//   {
//       "password": "iYdxxUkr+9",
//       "birth_date": "1968-01-16T00:00:00.000Z",
//       "lname": "Alvarez",
//       "fname": "James",
//       "email": "JA22@gmail.com",
//       "username": "JA22",
//       "citizen_number": "1359294184167",
//       "phone_number": "0813592941"
//   },
//   {
//       "password": "dsfsdff102",
//       "birth_date": "2005-09-11T00:00:00.000Z",
//       "lname": "Jang",
//       "fname": "siabrang",
//       "email": "jangman@gmail.com",
//       "username": "japo",
//       "citizen_number": "1201215215411",
//       "phone_number": "0851516217"
//   },
//   {
//       "password": "loDUs^8161",
//       "birth_date": "1980-05-12T00:00:00.000Z",
//       "lname": "Blackwell",
//       "fname": "Jennifer",
//       "email": "JB14@gmail.com",
//       "username": "JB14",
//       "citizen_number": "1359237303100",
//       "phone_number": "0813592373"
//   },
//   {
//       "password": "vyKyjpXQfb_5",
//       "birth_date": "1967-11-03T00:00:00.000Z",
//       "lname": "Crawford",
//       "fname": "Jarrod",
//       "email": "JC1@gmail.com",
//       "username": "JC1",
//       "citizen_number": "1358795896861",
//       "phone_number": "0813587958"
//   },
//   {
//       "password": "Waf|__-9",
//       "birth_date": "1989-01-15T00:00:00.000Z",
//       "lname": "Lige",
//       "fname": "Janice",
//       "email": "JL0@gmail.com",
//       "username": "JL0",
//       "citizen_number": "1358779368282",
//       "phone_number": "0813587793"
//   },
//   {
//       "password": "oMrFU$*+48",
//       "birth_date": "1996-05-24T00:00:00.000Z",
//       "lname": "Sosa",
//       "fname": "James",
//       "email": "JS15@gmail.com",
//       "username": "JS15",
//       "citizen_number": "1359245240969",
//       "phone_number": "0813592452"
//   },
//   {
//       "password": "JGb-#&76518",
//       "birth_date": "1988-12-22T00:00:00.000Z",
//       "lname": "Hayes",
//       "fname": "Kathleen",
//       "email": "KH18@gmail.com",
//       "username": "KH18",
//       "citizen_number": "1359270282615",
//       "phone_number": "0813592702"
//   },
//   {
//       "password": "jLts!7",
//       "birth_date": "1977-09-15T00:00:00.000Z",
//       "lname": "Curtis",
//       "fname": "Mary",
//       "email": "MC7@gmail.com",
//       "username": "MC7",
//       "citizen_number": "1358919396136",
//       "phone_number": "0813589193"
//   },
//   {
//       "password": "WkyOfI.1",
//       "birth_date": "1964-09-26T00:00:00.000Z",
//       "lname": "Glomb",
//       "fname": "Michael",
//       "email": "MG25@gmail.com",
//       "username": "MG25",
//       "citizen_number": "1359457127183",
//       "phone_number": "0813594571"
//   },
//   {
//       "password": "qx*=+^929",
//       "birth_date": "1967-02-04T00:00:00.000Z",
//       "lname": "Schmid",
//       "fname": "Melida",
//       "email": "MS26@gmail.com",
//       "username": "MS26",
//       "citizen_number": "1359487861372",
//       "phone_number": "0813594878"
//   },
//   {
//       "password": "poon12345",
//       "birth_date": "2019-02-12T00:00:00.000Z",
//       "lname": "Klumnaim",
//       "fname": "Poonyawatt",
//       "email": "poon@pnwttklm.com",
//       "username": "PK16",
//       "citizen_number": "1100342034056",
//       "phone_number": "0881060571"
//   },
//   {
//       "password": "CZwj%-25",
//       "birth_date": "1997-10-06T00:00:00.000Z",
//       "lname": "Byrnes",
//       "fname": "Randall",
//       "email": "RB27@gmail.com",
//       "username": "RB27",
//       "citizen_number": "1359511013425",
//       "phone_number": "0813595110"
//   },
//   {
//       "password": "OWU&&,172",
//       "birth_date": "1998-04-05T00:00:00.000Z",
//       "lname": "Burgoyne",
//       "fname": "Robert",
//       "email": "RB5@gmail.com",
//       "username": "RB5",
//       "citizen_number": "1358907458829",
//       "phone_number": "0813589074"
//   },
//   {
//       "password": "D$|?5",
//       "birth_date": "1964-11-09T00:00:00.000Z",
//       "lname": "Roberts",
//       "fname": "Ruth",
//       "email": "RR23@gmail.com",
//       "username": "RR23",
//       "citizen_number": "1359294185751",
//       "phone_number": "0813592941"
//   },
//   {
//       "password": "mnkE,1261",
//       "birth_date": "1992-12-02T00:00:00.000Z",
//       "lname": "Raya",
//       "fname": "Sarah",
//       "email": "SR4@gmail.com",
//       "username": "SR4",
//       "citizen_number": "1358848400572",
//       "phone_number": "0813588484"
//   },
//   {
//       "password": "Gvn*@##20",
//       "birth_date": "1979-05-04T00:00:00.000Z",
//       "lname": "Cruz",
//       "fname": "Vera",
//       "email": "VC11@gmail.com",
//       "username": "VC11",
//       "citizen_number": "1359011172455",
//       "phone_number": "0813590111"
//   }
// ]
// Testing Get all users information #2
// method: GET
// URL: /api/v1/user
// body:
// result: 
// [
//   {
//       "password": "",
//       "birth_date": "2024-04-23T00:00:00.000Z",
//       "lname": "",
//       "fname": "",
//       "email": "",
//       "username": "",
//       "citizen_number": "",
//       "phone_number": ""
//   },
//   {
//       "password": "EXSEWHHB.4",
//       "birth_date": "1968-12-06T00:00:00.000Z",
//       "lname": "Greyson",
//       "fname": "Mark",
//       "email": "AG24@gmail.com",
//       "username": "AG24",
//       "citizen_number": "1359318011244",
//       "phone_number": "0813593180"
//   },
//   {
//       "password": "uwJomMnw%$2",
//       "birth_date": "1973-03-09T00:00:00.000Z",
//       "lname": "Justiniano",
//       "fname": "Anthony",
//       "email": "AJ28@gmail.com",
//       "username": "AJ28",
//       "citizen_number": "1359589760673",
//       "phone_number": "0813595897"
//   },
//   {
//       "password": "iZdPfRtNk$6",
//       "birth_date": "1989-12-17T00:00:00.000Z",
//       "lname": "Beck",
//       "fname": "Bruce",
//       "email": "BB12@gmail.com",
//       "username": "BB12",
//       "citizen_number": "1359019096856",
//       "phone_number": "0813590190"
//   },
//   {
//       "password": "j=072254081",
//       "birth_date": "1981-04-14T00:00:00.000Z",
//       "lname": "Burke",
//       "fname": "Brenda",
//       "email": "BB6@gmail.com",
//       "username": "BB6",
//       "citizen_number": "1358911448759",
//       "phone_number": "0813589114"
//   },
//   {
//       "password": "GhMKiNL,3506",
//       "birth_date": "1959-04-01T00:00:00.000Z",
//       "lname": "Chauarria",
//       "fname": "Cindy",
//       "email": "CC13@gmail.com",
//       "username": "CC13",
//       "citizen_number": "1359220860087",
//       "phone_number": "0813592208"
//   },
//   {
//       "password": "FkkMFA&6",
//       "birth_date": "1954-07-09T00:00:00.000Z",
//       "lname": "Copeland",
//       "fname": "Cori",
//       "email": "CC16@gmail.com",
//       "username": "CC16",
//       "citizen_number": "1359253904569",
//       "phone_number": "0813592539"
//   },
//   {
//       "password": "VFxR@618811",
//       "birth_date": "1977-06-10T00:00:00.000Z",
//       "lname": "Howell",
//       "fname": "Craig",
//       "email": "CH2@gmail.com",
//       "username": "CH2",
//       "citizen_number": "1358795898446",
//       "phone_number": "0813587958"
//   },
//   {
//       "password": "fBObrS.%388",
//       "birth_date": "1992-04-03T00:00:00.000Z",
//       "lname": "Phelps",
//       "fname": "Colette",
//       "email": "CP17@gmail.com",
//       "username": "CP17",
//       "citizen_number": "1359262324146",
//       "phone_number": "0813592623"
//   },
//   {
//       "password": "eyjJpDJ*4",
//       "birth_date": "1995-02-27T00:00:00.000Z",
//       "lname": "Dixon",
//       "fname": "David",
//       "email": "DD9@gmail.com",
//       "username": "DD9",
//       "citizen_number": "1358931303337",
//       "phone_number": "0813589313"
//   },
//   {
//       "password": "cBPKLG?6",
//       "birth_date": "1973-08-26T00:00:00.000Z",
//       "lname": "Smith",
//       "fname": "Derrick",
//       "email": "DS21@gmail.com",
//       "username": "DS21",
//       "citizen_number": "1359286230452",
//       "phone_number": "0813592862"
//   },
//   {
//       "password": "oB#506",
//       "birth_date": "1998-09-06T00:00:00.000Z",
//       "lname": "Gerlach",
//       "fname": "Elizabeth",
//       "email": "EG3@gmail.com",
//       "username": "EG3",
//       "citizen_number": "1358819721562",
//       "phone_number": "0813588197"
//   },
//   {
//       "password": "ZYCzEn=87",
//       "birth_date": "1966-03-17T00:00:00.000Z",
//       "lname": "Mcdonald",
//       "fname": "Erika",
//       "email": "EM19@gmail.com",
//       "username": "EM19",
//       "citizen_number": "1359278306843",
//       "phone_number": "0813592783"
//   },
//   {
//       "password": "jfeOf=8",
//       "birth_date": "1996-10-09T00:00:00.000Z",
//       "lname": "Mcconnell",
//       "fname": "Frank",
//       "email": "FM29@gmail.com",
//       "username": "FM29",
//       "citizen_number": "1359597700919",
//       "phone_number": "0813595977"
//   },
//   {
//       "password": "nwCmd@,,2",
//       "birth_date": "1987-11-25T00:00:00.000Z",
//       "lname": "Longoria",
//       "fname": "Gary",
//       "email": "GL8@gmail.com",
//       "username": "GL8",
//       "citizen_number": "1358931301752",
//       "phone_number": "0813589313"
//   },
//   {
//       "password": "XEoodsDmc?1",
//       "birth_date": "1959-06-27T00:00:00.000Z",
//       "lname": "Mason",
//       "fname": "Gina",
//       "email": "GM20@gmail.com",
//       "username": "GM20",
//       "citizen_number": "1359286228867",
//       "phone_number": "0813592862"
//   },
//   {
//       "password": "iYdxxUkr+9",
//       "birth_date": "1968-01-16T00:00:00.000Z",
//       "lname": "Alvarez",
//       "fname": "James",
//       "email": "JA22@gmail.com",
//       "username": "JA22",
//       "citizen_number": "1359294184167",
//       "phone_number": "0813592941"
//   },
//   {
//       "password": "dsfsdff102",
//       "birth_date": "2005-09-11T00:00:00.000Z",
//       "lname": "Jang",
//       "fname": "siabrang",
//       "email": "jangman@gmail.com",
//       "username": "japo",
//       "citizen_number": "1201215215411",
//       "phone_number": "0851516217"
//   },
//   {
//       "password": "loDUs^8161",
//       "birth_date": "1980-05-12T00:00:00.000Z",
//       "lname": "Blackwell",
//       "fname": "Jennifer",
//       "email": "JB14@gmail.com",
//       "username": "JB14",
//       "citizen_number": "1359237303100",
//       "phone_number": "0813592373"
//   },
//   {
//       "password": "vyKyjpXQfb_5",
//       "birth_date": "1967-11-03T00:00:00.000Z",
//       "lname": "Crawford",
//       "fname": "Jarrod",
//       "email": "JC1@gmail.com",
//       "username": "JC1",
//       "citizen_number": "1358795896861",
//       "phone_number": "0813587958"
//   },
//   {
//       "password": "Waf|__-9",
//       "birth_date": "1989-01-15T00:00:00.000Z",
//       "lname": "Lige",
//       "fname": "Janice",
//       "email": "JL0@gmail.com",
//       "username": "JL0",
//       "citizen_number": "1358779368282",
//       "phone_number": "0813587793"
//   },
//   {
//       "password": "oMrFU$*+48",
//       "birth_date": "1996-05-24T00:00:00.000Z",
//       "lname": "Sosa",
//       "fname": "James",
//       "email": "JS15@gmail.com",
//       "username": "JS15",
//       "citizen_number": "1359245240969",
//       "phone_number": "0813592452"
//   },
//   {
//       "password": "JGb-#&76518",
//       "birth_date": "1988-12-22T00:00:00.000Z",
//       "lname": "Hayes",
//       "fname": "Kathleen",
//       "email": "KH18@gmail.com",
//       "username": "KH18",
//       "citizen_number": "1359270282615",
//       "phone_number": "0813592702"
//   },
//   {
//       "password": "jLts!7",
//       "birth_date": "1977-09-15T00:00:00.000Z",
//       "lname": "Curtis",
//       "fname": "Mary",
//       "email": "MC7@gmail.com",
//       "username": "MC7",
//       "citizen_number": "1358919396136",
//       "phone_number": "0813589193"
//   },
//   {
//       "password": "WkyOfI.1",
//       "birth_date": "1964-09-26T00:00:00.000Z",
//       "lname": "Glomb",
//       "fname": "Michael",
//       "email": "MG25@gmail.com",
//       "username": "MG25",
//       "citizen_number": "1359457127183",
//       "phone_number": "0813594571"
//   },
//   {
//       "password": "qx*=+^929",
//       "birth_date": "1967-02-04T00:00:00.000Z",
//       "lname": "Schmid",
//       "fname": "Melida",
//       "email": "MS26@gmail.com",
//       "username": "MS26",
//       "citizen_number": "1359487861372",
//       "phone_number": "0813594878"
//   },
//   {
//       "password": "poon12345",
//       "birth_date": "2019-02-12T00:00:00.000Z",
//       "lname": "Klumnaim",
//       "fname": "Poonyawatt",
//       "email": "poon@pnwttklm.com",
//       "username": "PK16",
//       "citizen_number": "1100342034056",
//       "phone_number": "0881060571"
//   },
//   {
//       "password": "CZwj%-25",
//       "birth_date": "1997-10-06T00:00:00.000Z",
//       "lname": "Byrnes",
//       "fname": "Randall",
//       "email": "RB27@gmail.com",
//       "username": "RB27",
//       "citizen_number": "1359511013425",
//       "phone_number": "0813595110"
//   },
//   {
//       "password": "OWU&&,172",
//       "birth_date": "1998-04-05T00:00:00.000Z",
//       "lname": "Burgoyne",
//       "fname": "Robert",
//       "email": "RB5@gmail.com",
//       "username": "RB5",
//       "citizen_number": "1358907458829",
//       "phone_number": "0813589074"
//   },
//   {
//       "password": "D$|?5",
//       "birth_date": "1964-11-09T00:00:00.000Z",
//       "lname": "Roberts",
//       "fname": "Ruth",
//       "email": "RR23@gmail.com",
//       "username": "RR23",
//       "citizen_number": "1359294185751",
//       "phone_number": "0813592941"
//   },
//   {
//       "password": "mnkE,1261",
//       "birth_date": "1992-12-02T00:00:00.000Z",
//       "lname": "Raya",
//       "fname": "Sarah",
//       "email": "SR4@gmail.com",
//       "username": "SR4",
//       "citizen_number": "1358848400572",
//       "phone_number": "0813588484"
//   },
//   {
//       "password": "Gvn*@##20",
//       "birth_date": "1979-05-04T00:00:00.000Z",
//       "lname": "Cruz",
//       "fname": "Vera",
//       "email": "VC11@gmail.com",
//       "username": "VC11",
//       "citizen_number": "1359011172455",
//       "phone_number": "0813590111"
//   }
// ]
router.get("/api/v1/user", (req, res) => {
  connection.query(`SELECT * FROM account`, function (err, results) {
    if (err) console.log(err);
    console.log(results);
    res.send(results);
  });
});

// Testing Get a user information #1
// method: GET
// URL: /api/v1/user/AG24
// body:
// result: 
// [
//   {
//       "password": "EXSEWHHB.4",
//       "birth_date": "1968-12-06T00:00:00.000Z",
//       "lname": "Greyson",
//       "fname": "Mark",
//       "email": "AG24@gmail.com",
//       "username": "AG24",
//       "citizen_number": "1359318011244",
//       "phone_number": "0813593180"
//   }
// ]
// Testing Get a user information #2
// method: GET
// URL: /api/v1/user/INVALID_USERNAME
// body:
// result: 
// []
router.get("/api/v1/user/:username", (req, res) => {
  connection.query(
    `SELECT * FROM account WHERE username = ?`,
    [req.params.username],
    function (err, results) {
      if (err) console.log(err);
      console.log(results);
      res.send(results);
    }
  );
});

// Testing Search Users #1
// method: GET
// body:
// URL: /api/v1/discover?name=a&startAge=20&endAge=30&email=&tel=
// result: 
// [
//   {
//       "password": "eyjJpDJ*4",
//       "birth_date": "1995-02-27T00:00:00.000Z",
//       "lname": "Dixon",
//       "fname": "David",
//       "email": "DD9@gmail.com",
//       "username": "DD9",
//       "citizen_number": "1358931303337",
//       "phone_number": "0813589313"
//   },
//   {
//       "password": "oB#506",
//       "birth_date": "1998-09-06T00:00:00.000Z",
//       "lname": "Gerlach",
//       "fname": "Elizabeth",
//       "email": "EG3@gmail.com",
//       "username": "EG3",
//       "citizen_number": "1358819721562",
//       "phone_number": "0813588197"
//   },
//   {
//       "password": "jfeOf=8",
//       "birth_date": "1996-10-09T00:00:00.000Z",
//       "lname": "Mcconnell",
//       "fname": "Frank",
//       "email": "FM29@gmail.com",
//       "username": "FM29",
//       "citizen_number": "1359597700919",
//       "phone_number": "0813595977"
//   },
//   {
//       "password": "oMrFU$*+48",
//       "birth_date": "1996-05-24T00:00:00.000Z",
//       "lname": "Sosa",
//       "fname": "James",
//       "email": "JS15@gmail.com",
//       "username": "JS15",
//       "citizen_number": "1359245240969",
//       "phone_number": "0813592452"
//   },
//   {
//       "password": "CZwj%-25",
//       "birth_date": "1997-10-06T00:00:00.000Z",
//       "lname": "Byrnes",
//       "fname": "Randall",
//       "email": "RB27@gmail.com",
//       "username": "RB27",
//       "citizen_number": "1359511013425",
//       "phone_number": "0813595110"
//   }
// ]
// Testing Search Users #2
// method: GET
// body:
// URL: /api/v1/discover?name=NoWayHome&startAge=100&endAge=300&email=&tel=
// result: 
// []
router.get("/api/v1/discover", (req, res) => {
  const { name, startAge, endAge, email, tel } = req.query;
  let sql = "SELECT * FROM account WHERE 1=1";
  const params = [];

  if (name != "undefined") {
    sql += " AND CONCAT(fname, lname) LIKE ?";
    params.push(`%${name}%`);
  }

  if (startAge != "undefined") {
    sql += " AND (YEAR(NOW()) - YEAR(birth_date)) >= ?";
    params.push(`${startAge}`);
  }

  if (endAge != 0) {
    sql += " AND (YEAR(NOW()) - YEAR(birth_date)) <= ?";
    params.push(`${endAge}`);
  }

  if (email != "undefined") {
    sql += " AND email LIKE ?";
    params.push(`%${email}%`);
  }

  if (tel != "undefined") {
    sql += " AND phone_number LIKE ?";
    params.push(`%${tel}%`);
  }
  sql += ";";
  console.log(sql, params);
  connection.query(sql, params, function (err, results) {
    if (err) console.log(err);
    console.log(results);
    res.send(results);
  });
});

// Testing Delete a user #1
// method: DELETE
// URL: /api/v1/user
// body:
// {
//   "username": "AG24"
// }
// result: 
// {
//   "fieldCount": 0,
//   "affectedRows": 1,
//   "insertId": 0,
//   "info": "",
//   "serverStatus": 2,
//   "warningStatus": 0,
//   "changedRows": 0
// }
// Testing Delete a user #2
// method: DELETE
// URL: /api/v1/user
// body:
// {
//   "username": "NOT_VALID_USERNAME"
// }
// result: 
// {
//   "fieldCount": 0,
//   "affectedRows": 0,
//   "insertId": 0,
//   "info": "",
//   "serverStatus": 2,
//   "warningStatus": 0,
//   "changedRows": 0
// }
router.delete("/api/v1/user", (req, res) => {
  const { username } = req.body;
  connection.query(
    `DELETE FROM account WHERE username = ?`,
    [username],
    function (err, results) {
      if (err) console.log(err);
      console.log(results);
      res.send(results);
    }
  );
});

// Testing Insert a user #1
// method: POST
// URL: /api/v1/user
// body:
// {
//   "user": {
//       "password": "EXSEWHHB.4",
//       "birth_date": "1968-12-06T00:00:00.000Z",
//       "lname": "Greyson",
//       "fname": "Mark",
//       "email": "AG24@gmail.com",
//       "username": "AG24",
//       "citizen_number": "1359318011244",
//       "phone_number": "0813593180"
//   }
// }
// result: 
// User updated successfully.
// Testing Insert a user #2
// method: POST
// URL: /api/v1/user
// body:
// {
//   "user": {
//   }
// }
// result: 
// An error occurred while updating the user.
router.post("/api/v1/user", (req, res) => {
  const user = req.body.user;
  connection.query(
    `INSERT INTO account (password, birth_date, lname, fname, email, username, citizen_number, phone_number) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      user.password,
      formatDate(user.birth_date),
      user.lname,
      user.fname,
      user.email,
      user.username,
      user.citizen_number,
      user.phone_number,
    ],
    function (err, results) {
      if (err){
        console.error(err);
        // Send an error response to the client
        return res.status(500).send("An error occurred while updating the user.");
      };
      console.log(results);
      // Send a success response to the client
      res.send("User updated successfully.");
    }
  );
});

// Testing Insert a user #2
// method: PUT
// URL: /api/v1/user
// body:
// {
//   "user": {
//     "password": "EXSEWHHB.4",
//     "birth_date": "1968-12-06T00:00:00.000Z",
//     "lname": "Greyson",
//     "fname": "Mark",
//     "email": "AG24@student.mahidol.ac.th",
//     "username": "AG24",
//     "citizen_number": "1359318011244",
//     "phone_number": "0813593180"
//    }
// }
// result: 
// Car updated successfully.
// Testing Insert a user #2
// method: PUT
// URL: /api/v1/user
// body:
// {
//   "user": {
//     "username": "AG24",
//     "email": "AG24@student.mahidol.ac.th"
//    }
// }
// result: 
// An error occurred while updating the car.
router.put("/api/v1/user", (req, res) => {
  const user = req.body.user;
  user.birth_date = formatDate(user.birth_date);
  connection.query(
    `UPDATE account
    SET ?
    WHERE username = ?;`,
    [
      user,
      user.username,
    ],
    function (err, results) {
      if (err){
        console.error(err);
        // Send an error response to the client
        return res.status(500).send("An error occurred while updating the car.");
      };
      console.log(results);
      // Send a success response to the client
      res.send("Car updated successfully.");
    }
  );
});


// Appendix
router.use(function (req, res, next) {
  res.status(404).send("404: Page not Found");
});

app.listen(port, function () {
  console.log("Server is running on port: " + port);
});
