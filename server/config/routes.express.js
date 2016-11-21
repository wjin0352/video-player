const videoRouter = require('../api/video/video.router');
const mainRouter = require('../api/main/main.router');

module.exports = (app) => {
  app.use('/', mainRouter);
  app.use('/videos', videoRouter);
}
