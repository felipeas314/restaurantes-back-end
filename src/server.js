process.env.NODE_CONFIG_DIR = `${__dirname}/app/config`;
const express = require('express');

const mongoose = require('./app/database/mongoose');

mongoose();

const app = express();

module.exports = app;
