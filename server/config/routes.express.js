const path = require('path');
const videoRouter = require('../api/video/video.router');
const mainRouter = require('../api/main/main.router');

module.exports = (app) => {
  app.use('/', mainRouter);
  app.use('/', videoRouter);
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('./public/index.html'))
  })
}
