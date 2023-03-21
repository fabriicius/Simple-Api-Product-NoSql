const connect = require('./mongodb');

class Loaders {
    init(){
        connect();
    }
}

module.exports = new Loaders();