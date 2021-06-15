var express = require("express");
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/process_post', function (req, res) {
    var response = {
       uname:req.body.uname,
       pass:req.body.pass
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })


var server = app.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("this app is running at https://%s:%s", host, port);
})