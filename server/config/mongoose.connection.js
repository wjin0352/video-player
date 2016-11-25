const mongoose = require('mongoose');
const config = require('./variables.express');

mongoose.Promise = global.Promise;

mongoose.connect(config.MONGOLAB_URI, (err, database) => {
  if(err) {
    console.log('error connecting to database...ERROR: ', err);
    process.exit(1);
  }
});

const db = mongoose.connection
  .on('error', console.error.bind(console, 'connection error'))
  .once('open', () => {
  console.log('Connected to mongodb');
});
