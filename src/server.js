process.env.NODE_CONFIG_DIR = `${__dirname}/app/config`;
const express = require('express');
const route = require('./routes');

const app = express();

const mongoose = require('./app/database/mongoose');
require('./app/database/postgresql');

mongoose();

app.use(express.json());
app.use('/api/v1', route);

module.exports = app;
