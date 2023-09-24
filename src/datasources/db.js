const mongoose = require('mongoose');
const config = {
  name: 'database',
  connector: 'mongodb',
  url: 'mongodb+srv://databaseUsers:123@databasedb.luc84.mongodb.net/myDatabase',
  useNewUrlParser: true
};

const db = mongoose.connect(config.url, { useNewUrlParser: true });

module.exports = db;
