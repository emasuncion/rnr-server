const User = use('App/Models/User');
const _ = require('lodash');

class UserRepository {
  async getAllUsers() {
    const users = await User.fetch();
    return users.toJSON();
  }

  async create(body) {
    const Database = use('Database');
    const mongoClient = await Database.connect();

    const defaults = {
      created_at: new Date().getTime(),
      updated_at: new Date().getTime(),
      isAdmin: 'false'
    };
    const properties = Object.assign(defaults, this.stripKeys(body));

    const user = await mongoClient.collection('users')
      .insertOne(properties);
    return user;
  }

  stripKeys(body) {
    return _.pick(body, [
      'name',
      'email',
      'isAdmin',
      'password',
      'created_at',
      'updated_at'
    ]);
  }
}

module.exports = UserRepository;
