class NominationController {
  static get inject() {
    return ['App/Repositories/Nomination'];
  }

  constructor(Repository) {
    this.NominationRepository = Repository;
  }

  async index({request, response}) {
    const nominations = await this.NominationRepository.search(request.get());
    response.ok({
      success: true,
      message: 'Nominations list',
      data: nominations
    });
  }

  async store({request, response}) {
    const nomination = await this.NominationRepository.create(request.body);
    response.created({
      success: true,
      message: 'Nomination created successfully',
      data: nomination
    });
  }
}

module.exports = NominationController;
