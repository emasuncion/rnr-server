class VotingController {
  static get inject() {
    return ['App/Repositories/Vote'];
  }

  constructor(Repository) {
    this.VoteRepository = Repository;
  }

  async index({request, response}) {
    const votes = await this.VoteRepository.search(request.get());
    response.ok({
      success: true,
      message: 'Votes list',
      data: votes
    });
  }

  async store({request, response}) {
    const vote = await this.VoteRepository.create(request.body);
    response.created({
      success: true,
      message: 'Vote created successfully',
      data: vote
    });
  }
}

module.exports = VotingController;
