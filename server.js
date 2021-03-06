const express = require('express');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const { connectivity } = require('./config/db');

const app = express();
const dotenv = require('dotenv').config();
var config = require('./config/index')[process.env.NODE_ENV];
const { insertDataIfEmpty } = require('./data');

var normalizedPath = require('path').join(__dirname, 'routes');
app
    .set('views', './public/views')
    .set('view engine', 'pug')
    .use(cors())
    .use(json({ limit: '3mb', extended: true }))
    .use(urlencoded({ limit: '3mb', extended: true }))
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, PATCH');
        next();
    })
    .listen(config.SERVER_PORT, () => {
        var get_connection = connectivity(config);
        get_connection.on('error', (err) => {
            console.error(err);
            process.exit(1);
        });
        get_connection.once('open', () => {
            insertDataIfEmpty();
            require('fs')
                .readdirSync(normalizedPath)
                .forEach(file => {
                    require('./routes/' + file)(app);
                });
            console.log(`DB is connected successfully`);
        });
        console.log(`Server is listening on port ${config.SERVER_PORT}`);

    });

module.exports = app;