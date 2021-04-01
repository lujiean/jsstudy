var express = require('express');

const sqlite3 = require('sqlite3').verbose();

var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/login', function (req, res) {
   res.send('login');
})

app.get('/getAirportPair', function (req, res) {
   // res.send('getAirportPair');

   // open the database
   let db = new sqlite3.Database('C:\\Users\\jiean.a.lu\\temp\\sqlite3\\flight.db');
   // db.serialize([callback]);

   let sql = `SELECT departure, destination
            FROM airport_pair`;
   let playlistId = 1;

   // first row only
   // db.get(sql, [playlistId], (err, row) => {
   // if (err) {
   //    return console.error(err.message);
   // }
   // return row
   //    ? console.log(row.id, row.name)
   //    : console.log(`No playlist found with the id ${playlistId}`);

   // });
   let outcontent=[{departure: "testa", destination: "testb"}];

   let f_getall = function(outcontent, callback){
      db.each(sql, (err, row) => {
         if (err) {
         throw err;
         }
         console.log(`${row.departure} ${row.destination}`);
         outcontent.push({departure: row.departure, destination: row.destination});
      });
      callback(outcontent)
   }

   // close the database connection
   // db.close();
   // let outcontent = getAll();

   console.log(f_getall());

   // return result
   res.send(JSON.stringify(f_getall()));
})

app.get('/getFlightStatus', function (req, res) {
   res.send('getAirportPair');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})