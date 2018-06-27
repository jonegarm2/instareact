var mongoose = require('mongoose');

var pictureSchema = new mongoose.Schema({
    user: String,
    imgUrl: String,
    content: String,
    
})

module.exports = mongoose.model('Picture', pictureSchema);