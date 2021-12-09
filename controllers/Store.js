const { Store } = require('../models/store');
const { successHandler, errorHandler } = require('../utils/handler');


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
    }
}