'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaymentMethodsSchema extends Schema {
  up () {
    this.create('payment_methods', (table) => {
      table.increments()
      table.string('method').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('payment_methods')
  }
}

module.exports = PaymentMethodsSchema
