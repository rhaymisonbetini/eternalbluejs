'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StoreSchema extends Schema {
  up () {
    this.create('stores', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('cnpj').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('stores')
  }
}

module.exports = StoreSchema
