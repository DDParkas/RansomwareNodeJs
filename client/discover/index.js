const path = require('path') 
const fs =  require('fs')
const config = require('../config')


function walk(callback){
    fs.readdir(config.startDirectory, function(err, files){
        if(!err){
            files.forEach(function(file){
                var filePath = path.join(config.startDirectory, file)
                fs.stat(filePath, function(err, stats){
                    if(!err){
                        if(stat.isDirectory()){
                            walk(callback)
                        }else if(stat.isFile()){
                            let ext = path.extname(filePath).replace('.', '')
                            let isWanted = config.extensions.find(wanted => wanted === ext)
                            if(isWanted) callback(filePath)
                        }
                    }
                    
                })
            })
        }
    })
}

module.exports = walk