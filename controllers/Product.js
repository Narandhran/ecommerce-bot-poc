const { Product } = require('../models/Product');
const { successHandler, errorHandler } = require('../utils/handler');

module.exports = {

    fetchAll: async (req, res) => {
        await Product.find({}, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Product listed successfully', result);
        });
    },
    fetchAllCategory: async (req, res) => {
        await Product.distinct('category', (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Categories listed successfully', result);
        });
    },
    fetchProductByCategory: async (req, res) => {
        let { category } = req.params;
        await Product.find({ category }, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Product listed successfully', result);
        });
    }

}