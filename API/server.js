const express = require("express"); // imported express module in express variable which becomes a function.
const cors = require('cors'); //runs cors module and returns the result in cors variable.
const app = express(); //calls express funtion and returns the result in app variable.
const bodyParser = require('body-parser'); //body-parser is used to read body of http post request.
const connection = require('./dbconnect'); //imported dbconnect module in connection variable which becomes a function
const { response } = require("express");



app.use(bodyParser.json()); //we have http post request data's content-type in json format so we used body-parser.json()

app.use(cors()) //allows us to access resources from different origin or server.



app.post('/login', (req, res) =>  { //receiving post request at path /login and post method takes 2 argument i.e., 1st path and 2nd callback function.

    var uname = req.body.name; // gets the name value from the body and stores it in the var called uname.
    var pass = req.body.password; //gets the password value from the body and stores it in the var called pass.

    connection.query('select name, password from logindetails where name = ? and password = ?', [uname, pass], (err, result, fields) => {
        if (err) {
            console.error(err);
            res.end('Could not find username ' + uname);
            return;
        }

        if (result && result.length == 1) {
            res.end('Login Successful');
        } else {
            res.end('Invalid username or password');
            return;
        }
    })
    // if(uname == 'Mansi_12' && pass == 'Mansi@123'){ //checks for the uname and pass
    //     res.end("Login Successful!"); //if true then responds with text login successful.
    // }
    // else{
    //     res.end("incorrect username or password!")//  if false then responds with the text incorrect username or password.
    // }
 });

 app.post('/newaccount', (req, res) => {
    var uname = req.body.name; 
    var pass = req.body.password;

    connection.query('select name from logindetails where name = ?', [uname], (err, result, fields) => {
        if(result.length === 0){
            connection.query('insert into logindetails values(?, ?)', [uname, pass], (err, result, fields) => {
                if (err) {
                    res.end(JSON.stringify(err));
                    return;
                }
                res.end('Account created.');
        
                // res.end(JSON.stringify(result));
                return;
            })
        }
        else{
            res.end('username already exists.')
            return;
        }
    })
 })


var server = app.listen(8080, function() { //runs the server at port 8080.
    var host = server.address().address
    var port = server.address().port

    console.log("this app is running at https://%s:%s", host, port);
})