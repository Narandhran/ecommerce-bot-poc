const { Store } = require('../models/store');
const { successHandler, errorHandler } = require('../utils/handler');
const jsStringify = require('js-stringify');


module.exports = {
    create: (req, res) => {
        Store.create(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Store created successfully', result);
        });
    },
    fetchByPin: (req, res) => {
        let { pincode } = req.params;
        Store.find({ pincode }, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Store listed successfully', result);
        })
    },
    viewMapByPin: async (req, res) => {
        let { pincode } = req.params;
        let stores = await Store.find({ pincode }, 'location store');
        let data= [];
        await stores.forEach(e => {
            data.push([{ lat: e.location.coordinates[0], lng: e.location.coordinates[1] }, e.store])
        })

        res.render('index', { jsStringify, data });
    }
}