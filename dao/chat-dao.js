var mongoose = require('mongoose');

var chatSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref:User },
    messages:[{type: mongoose.Schema.Types.ObjectId, ref:Message}]
});