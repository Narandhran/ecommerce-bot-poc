const express = require('express');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const { connectivity } = require('./config/db');

const app = express();
const dotenv = require('dotenv').config();
var config = require('./config/index')[process.env.NODE_ENV];

var normalizedPath = require('path').join(__dirname, 'routes');
var botRoutes = require("./routes/index");
const contactRouter = require('./routes/index');
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
        // var get_connection = connectivity(config);
        // get_connection.on('error', (err) => {
        //     console.error(err);
        //     process.exit(1);
        // });
        // get_connection.once('open', () => {
        //     require('fs')
        //         .readdirSync(normalizedPath)
        //         .forEach(file => {
        //             require('./routes/' + file)(app);
        //         });
        //     console.log(`Server is listening on port ${config.SERVER_PORT}`);
        // });
        console.log(`Server is listening on port ${config.SERVER_PORT}`);

    });
    app.use('/routes',contactRouter)

module.exports = app;