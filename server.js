var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config/index');

app.use(express.static(__dirname+'/dist'));
app.use(bodyParser.json());
app.use(require('connect-livereload')());
app.use(require('./routes/user-routes'));
app.listen(config.get('port'));
console.log('Server running on port '+config.get('port'));
