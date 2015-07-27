var express = require('express'),
    _ = require('lodash'),
    jwt = require('jwt-simple'),
    config  = require('./../config'),
    userdao = require('./../dao/user-dao');

var app = module.exports = express.Router();

function createToken(user) {
    userForToken = _.omit(user, 'password');
    return jwt.encode(userForToken, config.secret);
};

app.post('/users/register', function (req, res) {
/*    if (!req.body.name || !req.body.password) {
        return res.status(400).send("You must send the username and the password");
    }*/

    var newUser = _.pick(req.body, ['name', 'password', 'email']);
    userdao.addUser(newUser);
    res.status(201).send("User created");
});

app.post('/users/login', function (req, res) {


    var user = userdao.getUser(req.body.name, req.body.password);

    if (!user) {
        return res.status(404).send("The user not found");
    }

    if (!user.password === req.body.password) {
        return res.status(401).send("The username or password don't match");
    }

    res.status(201).send(
    {
        id_token: createToken(user)
    });
});

app.get('/users', function(req,res){
    userdao.getUsers(function(users){
        res.send(users);
    });

});

app.get('/users/startChat/:id',function(req,res){
    var authHeader = req.get('Authorization');
    var token = authHeader.slice(7,authHeader.length);
    var currentUser = jwt.decode(token,config.secret);
    console.log(currentUser);
    res.sendStatus(200);
});
