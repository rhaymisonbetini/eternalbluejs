'use strict'

/*
|--------------------------------------------------------------------------
| StoreSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Store = use("App/Models/Store")
const SuperFakerBrasil = require('faker-brasil');

class StoreSeeder {
  async run () {
    const fakerBrasil = new SuperFakerBrasil();
    await Store.create({
      name: fakerBrasil.enterprise(),
      cnpj: fakerBrasil.cnpj(true)
    })
  }
}

module.exports = StoreSeeder
