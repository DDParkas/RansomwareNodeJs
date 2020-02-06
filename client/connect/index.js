'use strict'

const axios = require('axios')
const { remoteServer } = require('../config')

class Connect{
    constructor(){
        this.http =  axios.create({
            baseURL: remoteServer
        })
    }
    async remoteRegisterMachine(machineInfo){
        return new Promise((resolve, reject)=> {
            this.http.post('/', machineInfo).then(({ data }) => {
                resolve(data)
            }).catch(e => reject(e))
        })
    }
    async checkMachineStatus(uuid){
        return new Promise((resolve, reject) => {
            this.http.get(`/?uuid=${uuid}`).then(({ data: { privateKey, passphrase} }) => {
                resolve({ privateKey, passphrase})
            }).catch(e => reject(e))
        })

    }
}

module.exports = Connect