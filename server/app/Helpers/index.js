'use strict'
const Env = use('env')
const crypto = use('crypto')

const generateKeyPair = () => {
    const passphrase = Env.get('APP_KEY')
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
            cipher: 'aes-256-cbc',
            passphrase
        }
    })
    return { publicKey, privateKey }
}

module.exports ={ generateKeyPair }