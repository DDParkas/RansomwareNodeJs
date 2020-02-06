const path = require('path')
const extensions = require('./extensions')

const prodConfig = {
    remoteServer: 'http://localhost:3333',
    startDirectory: './files',
    extensions,
    symetricKeyPath: path.join(__dirname,'..','secret.key'),
    privateKeyPath: path.join(__dirname,'..', 'private.key'),
    passphrasePath: path.join(__dirname, '..', 'passphrase.key') 
}

module.exports = prodConfig