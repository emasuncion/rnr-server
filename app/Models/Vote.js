const Model = use('MongooseModel');

class Vote extends Model {
  static get schema () {
    return {
      user: {
        type: String
      },
      category: {
        type: String
      },
      quarter: {
        type: Number
      },
      year: {
        type: Number
      },
      votes: {
        type: Array
      }
    }
  }
}

module.exports = Vote.buildModel('Vote');
