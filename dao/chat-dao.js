var mongoose = require('mongoose');
var ChatSchema = require('../models/chat');
dbURI = 'mongodb://localhost/textogram';


var Chat  = mongoose.model('Chat',chatSchema);


