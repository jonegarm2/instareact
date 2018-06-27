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
        User.findOne({email: req.body.email}).exec().then(user => {
            if (!user) return res.status(401).json({err: 'bad credentials'});
            user.comparePassword(req.body.pw, (err, isMatch) => {
                if (isMatch) {
                    var token = createJWT(user);
                    res.json({token: createJWT(user)});
                } else {
                    return res.status(401).json({err: 'bad credentials'});
                }
            });
        }).catch(err => res.status(401).json(err));
}

 /* ------------ Helper Function ---------- */

 function createJWT(user) {
     delete user.cart;
     return jwt.sign(
         {user}, // data payload
         SECRET,
         {expiresIn: '48h'}
     );
 }

 module.exports = {
     signup,
     login
 };