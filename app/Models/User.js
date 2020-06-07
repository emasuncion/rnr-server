const Hash = use('Hash');
/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const Model = use('Model');
class User extends Model {
  static boot() {
    super.boot();
    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        /* eslint-disable */
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
  }

  tokens() {
    return this.hasMany('App/Models/Token');
  }

  nominations() {
    return this.hasMany('App/Models/Nomination');
  }
}

module.exports = User;
