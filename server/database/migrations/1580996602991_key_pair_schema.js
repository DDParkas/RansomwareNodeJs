'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class KeyPairSchema extends Schema {
  up () {
    this.create('key_pairs', (table) => {
      table.increments()
      table.text('privateKey')
      table.text('publicKey')
      table.string('passphrase')
      table.integer('client_id').unsigned()
      table.timestamps()

      table.foreing('client_id').references('id').inTable('clients')
    })
  }

  down () {
    this.drop('key_pairs')
  }
}

module.exports = KeyPairSchema
