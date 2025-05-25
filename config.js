const fs = require('fs')
const { color } = require('./lib/myfunc')

global.owner = '62XXXX' // Main Owner's WhatsApp Number
global.nomerowner = ["62XXXX"] // Owner's WhatsApp Number
global.packname = 'Made by' // Fill It All You Want
global.author = 'Base - MD' // Your WhatsApp Bot Name
global.urldb = ''; // Just Leave It Empty

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
