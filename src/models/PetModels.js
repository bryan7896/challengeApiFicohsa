const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  peso: String,
  maleHeight: String,
  femaleHeight: String,
  colores: String,
  origen: String
});

module.exports = mongoose.model('Pet', petSchema);
