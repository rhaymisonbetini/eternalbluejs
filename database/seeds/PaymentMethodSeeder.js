'use strict'

/*
|--------------------------------------------------------------------------
| PaymentMethodSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const PaymentMethod = use("App/Models/PaymentMethod")

class PaymentMethodSeeder {
  async run() {
    let params = ["currency", "pix", "debit", "credit"]
    for (let param of params) {
      await PaymentMethod.create({
        method: param
      })
    }
  }
}

module.exports = PaymentMethodSeeder
