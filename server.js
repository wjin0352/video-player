import express from 'express'

let app = express();

const variables = require('./server/config/variables.express');

require('./server/config/mongoose.connection');
require('./server/config/config.express')(app);
require('./server/config/routes.express')(app);

app.listen(variables.EXPRESS_PORT, () => {
  console.log(variables.EXPRESS_LISTEN_MESSAGE + variables.EXPRESS_PORT);
});
