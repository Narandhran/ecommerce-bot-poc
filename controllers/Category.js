const { Category } = require('../models/Category');
const { successHandler, errorHandler } = require('../utils/handler');

module.exports = {
    fetchAll: async (req, res) => {
        await Category.find({}).exec((err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Category listed successfully', result);
        })
    }
}