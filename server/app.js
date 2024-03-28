const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3030;
const path = require('path');
const router = express.Router();
app.use(router);
router.use(express.urlencoded({extended: true}));
router.use(express.json());  

const mysql = require('mysql2');
var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});
connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
}   );

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/search.html'));
} );

router.post('/form-submit', (req, res) => {
    if(req.body.search_choice === 'ID') {
        connection.query(`SELECT * FROM professor WHERE EMP_NUM = ${req.body.search_value}`, function(err, results) {
            if(err) throw err;
            
            if (results.length === 0) {
                return res.sendFile(path.join(__dirname + '/html/notfound.html'));
            }
            res.send(results);
        });
    }else if(req.body.search_choice === 'name') {
        connection.query(`SELECT * FROM professor WHERE CONCAT(EMP_FNAME, EMP_LNAME) LIKE "%${req.body.search_value}%"`, function(err, results) {
            if(err) throw err;
            if (results.length === 0) {
                return res.sendFile(path.join(__dirname + '/html/notfound.html'));
            }
            res.send(results);
        });
    }
}   );

app.listen(port, function() {
    console.log('Server is running on port: ' + port);
});