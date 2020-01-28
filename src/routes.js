const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./utils/swagger/swaggerSpec.json');

const routes = Router();

var options = {
  customCss: '.swagger-ui .markdown p { margin: 0 auto; font-size: 14px; }'
};

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);
routes.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDoc, options));

module.exports = routes;
