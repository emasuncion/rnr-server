const User = use('App/Models/User');
const _ = require('lodash');

class UserRepository {
  async getAllUsers() {
    const users = await User.find({});
    return users;
  }

  async create(body) {
    const cleanUser = Object.assign({isAdmin: false}, this.stripKeys(body));
    const user = new User(cleanUser);
    user.save(err => {
      if (err) throw err;
    });
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
