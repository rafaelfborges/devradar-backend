const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./utils/swagger/swaggerSpec');
const swaggerOptions = require('./utils/swagger/swaggerOptions');

const routes = Router();

// DevController
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.put('/devs/:id', DevController.update);

// SearchControler
routes.get('/search', SearchController.index);

// Swagger config
routes.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerOptions));

module.exports = routes;
