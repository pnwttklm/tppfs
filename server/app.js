const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors"); // Import cors middleware
const app = express();
const port = process.env.PORT || 3030;
const router = express.Router();
const session = require("express-session");
const cp = require("cookie-parser");

router.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

router.use(cp());

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
  res.send("hello world, the server is running!");
});

router.get("/api/v1/car", (req, res) => {
  connection.query(`SELECT * FROM car`, function (err, results) {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

router.get("/api/v1/car/:id", (req, res) => {
  connection.query(
    `SELECT * FROM car WHERE product_id = ?`,
    [req.params.id],
    function (err, results) {
      if (err) throw err;
      console.log(results);
      res.send(results);
    }
  );
});

router.get("/api/v1/brand", (req, res) => {
  connection.query(
    `SELECT DISTINCT(brand) FROM CAR ORDER BY brand;`,
    function (err, results) {
      if (err) throw err;
      console.log(results);
      res.send(results);
    }
  );
});

router.get("/api/v1/engine", (req, res) => {
  connection.query(
    `SELECT DISTINCT(engine) FROM CAR ORDER BY engine;`,
    function (err, results) {
      if (err) throw err;
      console.log(results);
      res.send(results);
    }
  );
});

router.get("/api/v1/fuel", (req, res) => {
  connection.query(
    `SELECT DISTINCT(fuel_type) FROM CAR ORDER BY fuel_type;`,
    function (err, results) {
      if (err) throw err;
      console.log(results);
      res.send(results);
    }
  );
});

router.get("/api/v1/search", (req, res) => {
  const { model, brand, engine, fuel } = req.query;
  let sql = "SELECT * FROM CAR WHERE 1=1";
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
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

router.get("/api/v1/getUser/:username", (req, res) => {
  const username = req.params.username;
  connection.query(
    `SELECT * FROM account WHERE username = ?`,
    [username],
    function (err, results) {
      if (err) throw err;
      console.log(results);
      res.send(results);
    }
  );
});

router.get("/api/v1/checkLogin", (req, res) => {
  // Check if the user is already logged in (cookie exists)
  console.log("checklogin", req.session.username, req.session.password);
  if (req.session.username && req.session.password) {
    res.json({
      pass: true,
      username: req.session.username,
      password: req.session.password,
    });
    return; // Exit the function
  }
  res.json({ pass: false, username: null, password: null });
});

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
        req.session.username = username;
        req.session.password = password;
        console.log(username, password);
        //res.cookie["username"] = username;
        //res.cookie["password"] = password;
        console.log("login", req.session.username, req.session.password);
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

router.delete("/api/v1/car", (req, res) => {
  const { product_id } = req.body;
  connection.query(
    `DELETE FROM car WHERE product_id = ?`,
    [product_id],
    function (err, results) {
      if (err) throw err;
      console.log(results);
      res.send(results);
    }
  );
});
function formatDate(dateString){
  const date = new Date(dateString);
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  console.log(formattedDate); // 2016-10-22
  return formattedDate;
}
router.post("/api/v1/car", (req, res) => {
  
  const car = req.body.car;
  connection.query(
    `INSERT INTO car (image, brand, color, type, price, model, engine, fuel_type, distance, max_liter, gear, product_id, license, release_date, arrive_date, datetime, username) VALUES (?, ?, ?, ?, ?, ?, ? ,?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      car.image,
      car.brand,
      car.color,
      car.type,
      car.price,
      car.model,
      car.engine,
      car.fuel_type,
      car.distance,
      car.max_liter,
      car.gear,
      car.product_id,
      car.license,
      formatDate(car.release_date),
      formatDate(car.arrive_date),
      car.datetime,
      car.username,
    ],
    function (err, results) {
      if (err){
        console.error(err);
        res.send(false);
      };
      console.log(results);
      res.send(true);
    }
  );
});

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
        res.send(false);
      };
      console.log(results);
      res.send(true);
    }
  );
});

router.use(function (req, res, next) {
  res.status(404).send("404: Page not Found");
});

app.listen(port, function () {
  console.log("Server is running on port: " + port);
});
