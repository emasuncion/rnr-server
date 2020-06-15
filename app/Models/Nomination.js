const Model = use('MongooseModel');

class Nomination extends Model {
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
      nominee: {
        type: String
      },
      description: {
        type: String
      }
    }
  }
}

module.exports = Nomination.buildModel('Nomination');
