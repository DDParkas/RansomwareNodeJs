
const crypto = require('crypto')
const algorithm = 'aes-256-ctr'

const encryptioProvider = require('../utils/EncryptionManager')

const descipher = privateKey =>{
    const provider = new encryptioProvider()
    provider.importPrivateKey(privateKey)

    const{ IV, KEY } = provider.loadSymetricKey()
    
    return crypto.createDecipheriv(algorithm, KEY, IV)
} 

module.exports = descipher