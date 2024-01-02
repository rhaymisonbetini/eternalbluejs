'use strict'

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Product = use("App/Models/Product")
const SuperFakerBrasil = require('faker-brasil');

class ProductSeeder {
  async run() {
    let superFakerBrasil = new SuperFakerBrasil();

    for (let i = 0; i < 100; i++) {
      let marker = superFakerBrasil.marketProduct(true)
      if (!await Product.query().where('name', marker.product).first()) {
        await Product.create({
          name: marker.product,
          code: superFakerBrasil.bankAgency(),
          ammount: parseInt(Math.random() * (100 - 2) + 2),
          price: marker.price
        })
      }

    }

    for (let i = 0; i < 100; i++) {
      let marker = superFakerBrasil.eletronicProducts(true)
      if (!await Product.query().where('name', marker.product).first()) {
        await Product.create({
          name: marker.product,
          code: superFakerBrasil.bankAgency(),
          ammount: parseInt(Math.random() * (100.00 - 2) + 2),
          price: marker.price
        })
      }
    }

    for (let i = 0; i < 100; i++) {
      let marker = superFakerBrasil.construction()
      if (!await Product.query().where('name', marker).first()) {
        await Product.create({
          name: marker,
          code: superFakerBrasil.bankAgency(),
          ammount: parseInt(Math.random() * (100 - 2) + 2),
          price: (Math.random() * 100).toFixed(2)
        })
      }
    }

    for (let i = 0; i < 100; i++) {
      let marker = superFakerBrasil.clothesProduct(true)
      if (!await Product.query().where('name', marker.product).first()) {
        await Product.create({
          name: marker.product,
          code: superFakerBrasil.bankAgency(),
          ammount: parseInt(Math.random() * (100 - 2) + 2),
          price: marker.price
        })
      }
    }
  }
}

module.exports = ProductSeeder
