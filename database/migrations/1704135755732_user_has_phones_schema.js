'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserHasPhonesSchema extends Schema {
  up () {
    this.create('user_has_phones', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('phone').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_has_phones')
  }
}

module.exports = UserHasPhonesSchema
