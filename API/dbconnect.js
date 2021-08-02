var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Rohit"
  });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

// con.query('select name from logindetails where name = "Rohit"', function())


  module.exports = con;
  