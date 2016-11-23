var Video = require('./video.model');

function VideoController() {}

VideoController.prototype.getVideos = (req, res) => {
  return new Promise((resolve, reject) => {
    Video.find({}, (error, videos) => {
      if(error) {
        reject(error);
      } else {
        resolve(videos);
      }
    });
  }).then((videos) => {
    res.status(200).json(videos);
  }).catch((error) => {
    console.log(error);
  });
}

VideoController.prototype.createVideo = (req, res) => {
  return new Promise((resolve, reject) => {
    Video.create({
      url: req.body.url,
      title: req.body.title,
      description: req.body.description,
      publishedAt: req.body.publishedAt,
      image: req.body.image
    }, (error, video) => {
      if(error) {
        reject(error);
      } else {
        resolve(video);
      }
    });
  }).then((video) => {
    res.status(200).json(video);
  }).catch((error) => {
    console.log(error);
  });
}

VideoController.prototype.deleteVideo = (req, res) => {
  return new Promise((resolve, reject) => {
    console.log(req.body)
    Video.findByIdAndRemove({
      _id: req.params.id
    }, (error, video) => {
      if(error) {
        reject(error);
      } else {
        resolve(video);
      }
    });
  }).then((video) => {
    res.status(200).json(video);
  }).catch((error) => {
    console.log(error);
  });
}

module.exports = VideoController.prototype;
