'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use("App/Models/User")
const Hash = use("Hash")
const SuperFakerBrasil = require('faker-brasil');

class UserSeeder {

  async run() {
    const fakerBrasil = new SuperFakerBrasil();

    for (let i = 0; i < 20; i++) {
      let role;

      switch (true) {
        case (i === 0):
          role = 1;
          break;
        case (i < 10):
          role = 2;
          break;
        case (i < 15):
          role = 3;
          break;
        case (i < 18):
          role = 4;
          break;
        default:
          role = 5;
      }

      await User.create({
        username: fakerBrasil.fullName(),
        email: fakerBrasil.email().toLowerCase(),
        password: await Hash.make('123456789'),
        status:true,
        document: fakerBrasil.cpf(),
        role_id:role
      })

    }
  }
}

module.exports = UserSeeder
