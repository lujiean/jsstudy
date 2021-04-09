var express = require('express');

const sqlite3 = require('sqlite3').verbose();

var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/login', function (req, res) {
   // http://127.0.0.1:8081/login?user_name=ABC&password=DEF
   // console.log(req.query.user_name);
   // console.log(req.query.password);
   console.log('login Start');

   // open the database
   let db = new sqlite3.Database(__dirname + '\\sqlite3\\flight.db');

   let sql = `SELECT count(*) as cnt
            FROM user_account
            WHERE user_name = ?
            AND password = ?`;

   // first row only
   db.get(sql, [req.query.user_name, req.query.password], (err, row) => {
      if (err) {
         return console.error(err.message);
      } else {
         if(row.cnt ==0){
            res.send({error: 'Not found eligible user'});
         } else {
            //--generate and return token
            let f_token = req.query.user_name + '_token';
            let f_current = new Date(Date.now());
            // insert one row into the langs table
            db.run(`INSERT INTO token(token, create_time, user_name) VALUES(?, ?, ?)`, 
                     [f_token, f_current, req.query.user_name], function(err) {
               if (err) {
                  return console.log(err.message);
               }
               // get the last insert id
               // console.log(`A row has been inserted with rowid ${this.lastID}`);
               res.send({token: f_token});
            });
         }
      }
      // return row
      //    ? console.log(row.cnt)
      //    : console.log(`No playlist found with the id`);

   });

   // close the database connection
   db.close();

   // res.send('login');
   console.log('login end');
})

app.get('/getAirportPair', function (req, res) {
   // http://127.0.0.1:8081/getAirportPair
   console.log('getAirportPair Start');

   // open the database
   // let db = new sqlite3.Database('C:\\Users\\jiean.a.lu\\temp\\sqlite3\\flight.db');
   // console.log(__dirname);
   let db = new sqlite3.Database(__dirname + '\\sqlite3\\flight.db');

   let sql = `SELECT departure, destination
            FROM airport_pair`;

   db.all(sql, [], (err, rows) => {
      if (err) {
         throw err;
      }

      res.send(rows);
      // rows.forEach((row) => {
      //    console.log(row.name);
      // });
   });

   // close the database connection
   db.close();

   console.log('getAirportPair End');
})

app.get('/getFlightStatus', function (req, res) {
   res.send('getAirportPair');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})