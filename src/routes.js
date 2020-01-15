const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({ message: 'Server running...' });
});

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

module.exports = routes;