
const Model = use('MongooseModel');

class Token extends Model {
  user() {
    return this.belongsTo('App/Models/User');
  }
}

module.exports = Token;
