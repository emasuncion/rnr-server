const Vote = use('App/Models/Vote');
const _ = require('lodash');

class VoteRepository {
  async search(filters) {
    const votes = await Vote.find(filters);
    return votes;
  }

  async create(body) {
    const currentDateTime = new Date();
    const defaults = {
      quarter: this.getCurrentQuarter(currentDateTime),
      year: currentDateTime.getFullYear()
    };
    const voteProp = Object.assign(defaults, this.stripKeys(body));

    const vote = new Vote(voteProp);
    vote.save(err => {
      if (err) throw err;
    });
    return vote;
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
      'votes',
      'quarter',
      'year',
      'created_at',
      'updated_at'
    ]);
  }
}

module.exports = VoteRepository;
