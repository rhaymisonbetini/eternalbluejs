'use strict';

const User = use("App/Models/User");

class UserRepository {

  async getUserByPhone(phone) {
    console.log(phone);
    return User.query().whereHas('hasPhone', (builder) => {
      builder.where('phone', phone)
    }).first();
  }
}

module.exports = UserRepository
