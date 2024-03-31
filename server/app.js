const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors"); // Import cors middleware
const app = express();
const port = process.env.PORT || 3030;
const path = require("path");
const router = express.Router();
var session = require("express-session");
const store = new session.MemoryStore();
const cp = require("cookie-parser");
app.use(cors()); // Use cors middleware
app.use(router);

router.use(cp());

router.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Adjust as needed for your setup
    store: store,
  })
);
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

router.post("/api/v1/login", cors(), (req, res) => {
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
      console.log(String(username));
      console.log(password);
      if (results[0].count === 1) {
        req.session.user = {
            username, password
        };
        res.json({pass: true, user: req.session.user});
      } else {
        res.json({ pass: false, user: null });
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
