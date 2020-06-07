class StoreUser {
  get rules() {
    return {
      name: 'required|string|max:128|regex:^[a-zA-Z0-9- ()]*$',
      email: 'required|email',
      password: 'required|min:8'
    };
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return {
      'name.required': 'User name is required',
      'name.string': 'User name must be a string',
      'name.regex': 'Special characters not allowed',
      'email.required': 'User email is required',
      'email.email': 'User email must be a valid email',
      'password.required': 'Password is required',
      'password.min': 'Password must be at least 8 characters'
    };
  }

  get sanitizationRules() {
    return {
      name: 'strip_tags|trim',
      email: 'strip_tags|trim',
      password: 'strip_tags|trim'
    };
  }

  async fails(errorMessages) {
    return this.ctx.response.badRequest({
      success: false,
      message: 'Validation Error',
      data: errorMessages
    });
  }
}

module.exports = StoreUser;
