const mongoose = require('mongoose');

var videoSchema = mongoose.Schema({
  url: String,
  title: String,
  description: String,
  publishedAt: String,
  image: String
});

module.exports = mongoose.model('Video', videoSchema);
