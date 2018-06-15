var User = require('../models/user');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET

module.exports = function(req, res, next) {
    var token = req.body.token || req.query.token
    if (token) {
        token = token.replace('Bearer ', '');
        jwt.verify(token, SECRET, function(err, decoded) {
            if (err) {
                next(err);
            } else {
                req.user = decoded.user;
                next();
            }
        });
    } else {
        next();
    }
};