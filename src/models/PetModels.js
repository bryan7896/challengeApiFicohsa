const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    breed: String,
    weight: String,
    maleHeight: String,
    femaleHeight: String,
    colors: String,
    origin: String,
    urlImg: String,
    details: String,
});

module.exports = mongoose.model('Pet', petSchema);
