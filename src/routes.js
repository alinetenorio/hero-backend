const express = require('express');
const NgoController = require('./controllers/NgoController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//LOGIN
routes.post('/session', SessionController.store);

//NGOS
routes.get('/ngo', NgoController.index);
routes.post('/ngo', NgoController.store);

//INCIDENTS 
routes.get('/incident', IncidentController.index);
routes.post('/incident', IncidentController.store);
routes.delete('/incident/:id', IncidentController.destroy);

//NGO PROFILE
routes.get('/profile', ProfileController.index);

module.exports = routes;

