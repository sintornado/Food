const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('config');

app.use(bodyParser.json());

app.use('/api', require('./routes'))



app.listen(config.server.port, () => console.log('App started on port' + config.server.port));