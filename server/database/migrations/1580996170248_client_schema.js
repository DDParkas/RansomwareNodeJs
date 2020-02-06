'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.string('uuid').unique()
      table.dateTime('infection')
      table.json('user')
      table.json('os')
      table.boolean('loked').defaultTo(false) // para teste  encrypta e desencripta
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientSchema
