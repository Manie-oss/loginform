var express = require("express");
var cors = require('cors')
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors())

app.post('/login', (req, res) =>  {

    var uname = req.body.name;
    var pass = req.body.password;
    if(uname == 'Mansi_12' && pass == 'Mansi@123'){
        res.end("Login Successful!");
    }
    else{
        res.end("incorrect username or password!")
    }
 });


var server = app.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("this app is running at https://%s:%s", host, port);
})