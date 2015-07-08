var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname+'/dist'));
app.use(bodyParser.json());

app.use(require('./user-routes'));
app.listen(3000);
console.log('Server running on port 3000');
