'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class KeyPair extends Model {
    client(){
        return this.belongsTo('app/Models/Client')
    }
}

module.exports = KeyPair
