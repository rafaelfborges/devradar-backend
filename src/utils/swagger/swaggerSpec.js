module.exports = swaggerSpec = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'DevRadar API',
    description: 'This is a sample server for DevRadar API. You can find out more about in my [project github](https://github.com/rafaelfborges/omnistack-week10-backend).',
    contact: {
      name: 'Contact the developer',
      url: 'https://github.com/rafaelfborges'
    },
    license: {
      name: 'MIT',
      url: 'https://github.com/rafaelfborges/omnistack-week10-backend/blob/master/LICENSE'
    }
  },
  host: process.env.URL,
  consumes: [
    'application/json'
  ],
  produces: [
    'application/json'
  ],
  paths: {
    '/devs': {
      get: {
        tags: [
          'Devs'
        ],
        summary: 'Returns all developers',
        description: 'Returns all information about developers',
        responses: {
          200: {
            description: 'Successful operation'
          }
        }
      },
      post: {
        tags: [
          'Devs'
        ],
        summary: 'Place a developer',
        produces: 'application/json',
        description: 'Place a new developer profile',
        parameters:  [
          {
            in: 'body',
            name: 'body',
            description: 'To place a developer, sends your github profile, location coordinates and techs on body',
            required: true,
            schema: {
              type: 'object',
              properties: {
                github_username: {
                  type: 'string',
                  example: 'rafaelfborges'
                },
                techs: {
                  type: 'string',
                  example: 'Java, JavaScript, React'
                },
                latitude: {
                  type: 'integer',
                  example: -25.5266488
                },
                longitude: {
                  type: 'integer',
                  example: -49.2112723
                }
              }
            }
          }
        ],
        responses: {
          201: {
            description: 'Returns a object with the new developer data'
          }
        }
      }
    },
    '/search': {
      get: {
        tags: [
          'Search'
        ],
        summary: 'Finds devs by location and techs',
        description: 'Returns devs in geolocation coordinates with the specific techs',
        produces: 'application/json',
        parameters: [
          {
            name: 'latitude',
            in: 'query',
            description: 'Latitude coordinate, eg: -25.5236613',
            required: true,
            type: 'string'
          },
          {
            name: 'longitude',
            in: 'query',
            description: 'Longitude coordinate, eg: -49.201587',
            required: true,
            type: 'string'
          },
          {
            name: 'techs',
            in: 'query',
            description: 'Multiple techs can be provided with comma separeted, eg: Java, PHP, JavaScript',
            required: true,
            type: 'string'
          }
        ],
        responses: {
          '200': {
            description: 'Returns an array object that satisfy the search parameters'
          }
        }
      }
    }
  }
}
