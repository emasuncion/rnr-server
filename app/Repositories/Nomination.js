const Nomination = use('App/Models/Nomination');
const _ = require('lodash');

class NominationRepository {
  async search(filters) {
    const nominations = await Nomination.find(filters);
    return nominations;
  }

  async create(body) {
    const currentDateTime = new Date();
    const defaults = {
      quarter: this.getCurrentQuarter(currentDateTime),
      year: currentDateTime.getFullYear()
    };
    const nominationProp = Object.assign(defaults, this.stripKeys(body));

    const nomination = new Nomination(nominationProp);
    nomination.save(err => {
      if (err) throw err;
    });
    return nomination;
  }

  getCurrentQuarter(dateTime) {
    const month = dateTime.getMonth() + 1;
    switch (parseInt(month)) {
      case 8:
      case 9:
      case 10:
        return 1;
      case 11:
      case 12:
      case 1:
        return 2;
      case 2:
      case 3:
      case 4:
        return 3;
      case 5:
      case 6:
      case 7:
        return 4;
      default:
        return 1;
    }
  }

  stripKeys(body) {
    return _.pick(body, [
      'user',
      'category',
      'nominee',
      'description',
      'quarter',
      'year',
      'created_at',
      'updated_at'
    ]);
  }
}

module.exports = NominationRepository;
