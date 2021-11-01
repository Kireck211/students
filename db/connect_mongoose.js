const mongoose = require('mongoose');

const { DB_URL } = process.env;

mongoose.connect(DB_URL)
  .then(() => console.log('Connected to the database'))
  .catch(err => console.log('Not able to connect', err));

module.exports = mongoose;