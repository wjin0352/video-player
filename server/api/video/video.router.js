const express = require('express');
const router = express.Router();
const controller = require('./video.controller');

router.get('/videos', controller.getVideos)
  .post('/videos', controller.createVideo)
  .delete('/videos/:id', controller.deleteVideo)

module.exports = router;
