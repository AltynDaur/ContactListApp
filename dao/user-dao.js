var mongoose = require('mongoose');
var userSchema = require('../models/user');
dbURI = 'mongodb://localhost:27017/textogram';
mongoose.connect(dbURI);

var User  = mongoose.model('User',userSchema);

exports.addUser = function (user){
    var newUser = new User({
        name: user.name,
        password: user.password,
        email: user.email
    });
    newUser.save(function(err){
        if(!err){
            console.log('User saved!');
        }
    });
};

exports.getUser = function(name,pass){
    var currentUser = {};
    User.findOne({name:name}, function(err, user){
        if(!err){
            console.log(user);
            currentUser = user;
        }
    });
    return currentUser;
};

exports.getUsers = function(cb) {

    User.find({},function(err,result){

        cb(result);
    });
};
