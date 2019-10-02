const express = require('express');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/sessions', SessionController.store);

module.exports = routes;
