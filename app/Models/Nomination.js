/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const Model = use('Model');

class Nomination extends Model {
  user() {
    return this.belongsTo('App/Models/User');
  }
}

module.exports = Nomination;
