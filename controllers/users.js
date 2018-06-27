var User = require('../models/user');
var Picture = require('../models/pictures');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

function signup(req, res) {
    var user = new User(req.body);
    user.save()
        .then(user => {
            res.json({token: createJWT(user)});
        })
        .catch(err => res.status(400).json(err));
}

function login(req, res) {
    console.log(req.body)
    
}