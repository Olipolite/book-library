const express = require('express');
const readerController = require('./controllers/readers');

const app = express()

app.use(express.json());

app.post('/readers', readerController.createReader);

module.exports = app;