var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(bodyParser.json());



app.use(express.static(__dirname + '/public'));





app.listen(6453, function () {
  console.log('Your app is now running');
});