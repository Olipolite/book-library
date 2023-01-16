const express = require('express');
const readerController = require('./controllers/readers');

const app = express()

app.use(express.json());

app.post('/readers', readerController.createReader);

app.get('/readers', readerController.getReader);

app.get('/readers/:id', readerController.getReaderId);

module.exports = app;