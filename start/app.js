const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/framework/providers/ViewProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/shield/providers/ShieldProvider',
  '@adonisjs/session/providers/SessionProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/validator/providers/ValidatorProvider',
  'adonis-swagger/providers/SwaggerProvider',
  'adonis-mongoose-model/providers/MongooseProvider'
];

const aceProviders = [
  'lucid-mongo/providers/MigrationsProvider',
  '@adonisjs/vow/providers/VowProvider'
];

const aliases = {};

const commands = [];

module.exports = {
  providers, aceProviders, aliases, commands
};
