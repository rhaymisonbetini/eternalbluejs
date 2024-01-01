'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientsSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('phone').notNullable()
      table.string('cpf').notNullable()
      table.boolean('status').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientsSchema
