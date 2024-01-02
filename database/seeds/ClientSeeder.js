'use strict'

/*
|--------------------------------------------------------------------------
| ClientSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Clients = use("App/Models/Client")
const SuperFakerBrasil = require('faker-brasil');

class ClientSeeder {
  async run() {
    const fakerBrasil = new SuperFakerBrasil();
    for (let i = 0; i < 200; i++) {
      Clients.create({
        name: fakerBrasil.lastName(),
        email: fakerBrasil.email().toLowerCase(),
        phone: fakerBrasil.cellPhone(true, true),
        cpf: fakerBrasil.cpf(),
        status: true,
      })
    }
  }
}

module.exports = ClientSeeder
