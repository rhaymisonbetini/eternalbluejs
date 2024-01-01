'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalesSchema extends Schema {
  up () {
    this.create('sales', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('client_id').unsigned().references('id').inTable('clients')
      table.integer('payment_method_id').unsigned().references('id').inTable('payment_methods')
      table.double('total',10,2).notNullable()
      table.double('discount',10,2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('sales')
  }
}

module.exports = SalesSchema
