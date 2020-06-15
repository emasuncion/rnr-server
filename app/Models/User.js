const Model = use('MongooseModel');

class User extends Model {
  static boot ({schema}) {
    this.addHook('preSave', 'UserHook.hashPassword');
  }

  static get schema () {
    return {
      name: {
        type: String
      },
      isAdmin: {
        type: Boolean
      },
      password: {
        type: String
      }
    }
  }
}

module.exports = User.buildModel('User');
