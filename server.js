var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

require('dotenv').config();
require('./config/database');

var app = express();

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());
app.use(cors());

app.use(require('./config/auth'));

/* ----- api if needed -------- */

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on this ${port}`)
});