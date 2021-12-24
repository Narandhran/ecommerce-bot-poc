const mongoose = require('mongoose');
// establish connection to mongodb
var database = {
    connectivity: (config) => {
        mongoose.set('debug', true);
        mongoose.Promise = global.Promise;
        mongoose.connect(`mongodb://${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`,
            { useNewUrlParser: true });
        const db = mongoose.connection;
        return db;
    }
};

module.exports = database;