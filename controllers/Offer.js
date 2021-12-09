const { Offer } = require('../models/offer');
const { successHandler, errorHandler } = require('../utils/handler');

module.exports = {
    fetchAll: (req, res) => {
        Offer.find({}, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Offer listed successfully', result);
        })
    }
}