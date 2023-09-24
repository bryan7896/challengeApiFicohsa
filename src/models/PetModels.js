const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    breed: String,
    peso: String,
    maleHeight: String,
    femaleHeight: String,
    colors: String,
    origin: String,
    urlImg: string,
    details: string,
});

module.exports = mongoose.model('Pet', petSchema);
