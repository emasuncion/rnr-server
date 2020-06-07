class StoreNomination {
  get rules() {
    return {
      user: 'required|regex:^[a-zA-Z0-9- ()]*$',
      category: 'required|regex:^[a-zA-Z0-9- ()]*$',
      nominee: 'required|regex:^[a-zA-Z0-9- ()]*$',
      description: 'required|min:3|regex:^[a-zA-Z0-9- ()]*$'
    };
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return {
      'user.required': 'User is required',
      'user.regex': 'Special characters are not allowed',
      'category.required': 'Category is required',
      'category.regex': 'Special characters are not allowed',
      'nominee.required': 'Nominee is required',
      'nominee.regex': 'Special characters are not allowed',
      'description.required': 'Description is required',
      'description.min': 'Description must be at least 3 characters',
      'description.regex': 'Special characters are not allowed'
    };
  }

  get sanitizationRules() {
    return {
      user: 'strip_tags|trim',
      category: 'strip_tags|trim',
      nominee: 'strip_tags|trim',
      description: 'strip_tags|trim'
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

module.exports = StoreNomination;
