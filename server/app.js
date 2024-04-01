const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors"); // Import cors middleware
const app = express();
const port = process.env.PORT || 3030;
const router = express.Router();
const cp = require("cookie-parser");
app.use(cors()); // Use cors middleware
app.use(router);

router.use(cp());

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

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

router.get("/api/v1/getUser/:username", (req, res) => {
    const username = req.params.username;
    connection.query(
        `SELECT * FROM account WHERE username = ?`,
        [username], function (err, results) {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
    });

router.get("/api/v1/checkLogin", (req, res) => {
  // Check if the user is already logged in (cookie exists)
  if (req.cookies.username && req.cookies.password) {
    res.json({
      pass: true,
      username: req.cookies.username,
    });
    return; // Exit the function
  }
  res.json({ pass: false, username: null, password: null });
});

router.get("/api/v1/login/:username/:password", cors(), (req, res) => {
  const username = req.params.username;
  const password = req.params.password;
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
        res.cookie("username", String(username));
        res.cookie("password", String(password));
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

router.use(function (req, res, next) {
  res.status(404).send("404: Page not Found");
});

app.listen(port, function () {
  console.log("Server is running on port: " + port);
});
