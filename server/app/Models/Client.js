'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')


class Client extends Model {
    get jsonFields () {
        return [ 'user', 'os' ]
    }
 
    static boot () {
        super.boot()
        this.addTrait('@provider:Jsonable')
    }
    static get dates(){
        return [ 'create_at', 'updated_at', 'infection' ]
    }
    keyPair(){
        return this.hasOne('app/Models/KeyPair')
    }
}

module.exports = Client
