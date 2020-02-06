const fs = require('fs')

const worker = (file, cipher) => {
    var chunkSize  = 512, // pedaço encryptado
        position = 0,
        bytesRead = 0,
        buffer = Buffer.alloc(chunkSize)

    const fileDescriptor = fs.openSync(file, 'rs+')

    bytesRead = fs.readSync(fileDescriptor, buffer, 0, chunkSize, position )

    while(bytesRead > 0){
        var content = cipher.update(buffer)

        const wc = fs.writeSync(fileDescriptor, content, 0, content.length, position)
        position += wc

        bytesRead = fs.readSync(fileDescriptor, buffer, 0, chunkSize, position)
    }
    fs.closeSync(fileDescriptor)

}
module.exports = worker