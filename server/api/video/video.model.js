const mongoose = require('mongoose');

var videoSchema = mongoose.Schema({
  url: String,
  title: String,
  description: String
});

module.exports = mongoose.model('Video', videoSchema);
