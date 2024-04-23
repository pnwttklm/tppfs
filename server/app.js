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
router.get("/api/v1/car", (req, res) => {
  connection.query(`SELECT * FROM car`, function (err, results) {
    if (err) console.log(err);
    console.log(results);
    res.send(results);
  });
});

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
function formatDate(dateString){
  const date = new Date(dateString);
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  console.log(formattedDate); // 2016-10-22
  return formattedDate;
}
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
router.get("/api/v1/user", (req, res) => {
  connection.query(`SELECT * FROM account`, function (err, results) {
    if (err) console.log(err);
    console.log(results);
    res.send(results);
  });
});

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

//search for user
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
