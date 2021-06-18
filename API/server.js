var express = require("express");
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/login', (req, res) =>  {

    var uname = req.body.uname;
    var pass = req.body.pass;
    if(uname == 'Mansi_12' && pass == 'Mansi@123'){
        res.end("Login Successful!");
    }
 });


var server = app.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("this app is running at https://%s:%s", host, port);
})