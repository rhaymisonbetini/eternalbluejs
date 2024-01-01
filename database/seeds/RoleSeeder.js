'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Roles = use("App/Models/Role")

class RoleSeeder {
  async run() {
    let roles = ['manager', 'cashier', 'stocker', 'finance', 'cleaning']
    for (let role of roles) {
      let exists = await Roles.query().where('name', role).first();
      if (!exists) {
        await Roles.create({
          name: role
        })
      }
    }
  }
}

module.exports = RoleSeeder
