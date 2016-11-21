const express = require('express');
const router = express.Router();
const controller = require('./video.controller');

router.get('/', controller.getVideos)
  .post('/', controller.createVideo)

module.exports = router;
