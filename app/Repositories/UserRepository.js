'use strict';

const User = use("App/Models/User");

class UserRepository {

  async getUserByPhone(phone) {
    return User.query().whereHas('hasPhone', (builder) => {
      builder.where('phone', phone)
    }).first();
  }

  async updateUserStatusByPhone(phone) {
    return User.query().whereHas('hasPhone', (builder) => {
      builder.where('phone', phone)
    }).update({
      online: true
    })
  }
}

module.exports = UserRepository
