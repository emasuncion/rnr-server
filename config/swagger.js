
const Env = use('Env');

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Swagger Information
  | Please use Swagger 2 Spesification Docs
  | https://swagger.io/docs/specification/2-0/basic-structure/
  |--------------------------------------------------------------------------
  */

  enable: true,
  specUrl: '/v1/swagger.json',

  options: {
    swaggerDefinition: {
      components: {},
      info: {
        title: 'Rewards & Recognition Backend',
        version: '0.0.1'
      },
      host: Env.get('APP_URL', 'rewards-recognition-server.an.r.appspot.com'),
      basePath: '',
      schemes: [
        'https',
        'http'
      ],
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      securityDefinitions: {
        bearerAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization'
        }
      }
    },

    apis: ['docs/**/*.yml']
  }
};
