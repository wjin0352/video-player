import express from 'express'

let app = express();

const variables = require('./server/config/variables.express');

require('./server/config/mongoose.connection');
require('./server/config/config.express')(app);
require('./server/config/routes.express')(app);

// to push to production heroku you need to listen on process.env.PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(variables.EXPRESS_LISTEN_MESSAGE + variables.EXPRESS_PORT);
});
