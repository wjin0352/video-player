const mongoose = require('mongoose');
const config = require('./variables.express');
mongoose.connect(config.MONGODB.URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('Connected to mongodb');
});
