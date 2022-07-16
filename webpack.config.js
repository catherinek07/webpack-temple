//common.js
//module path, plugin
const path = require('path')
module.exports = {
    //start
    entry : './js/main.js',
    output : {
    path: path.resolve(__dirname, 'public'),
    filename: ' main.js',
    clean: true
    }
}