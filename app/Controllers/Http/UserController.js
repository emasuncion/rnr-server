class UserController {
  static get inject() {
    return ['App/Repositories/User'];
  }

  constructor(Repository) {
    this.UserRepository = Repository;
  }

  async index({response}) {
    const users = await this.UserRepository.getAllUsers();
    response.ok({
      success: true,
      message: 'Users list',
      data: users
    });
  }

  async store({request, response}) {
    const user = await this.UserRepository.create(request.body);
    response.created({
      success: true,
      message: 'User created successfully',
      data: user
    });
  }
}

module.exports = UserController;
