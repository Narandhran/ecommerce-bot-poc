const { Product } = require('../models/Product');
const { successHandler, errorHandler } = require('../utils/handler');

module.exports = {
    fetchAll: async (req, res) => {
        await Product.find({}, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Product listed successfully', result);
        });
    },
    fetchProductByCategory: async (req, res) => {
        let { category, maxPrice = '1000' } = req.query;
        let price = parseInt(maxPrice);

        await Product.find({ category, price: { $lt: price } }).limit(10).exec((err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Product listed successfully', result);
        });
    },
    fetchRegex: async (req, res) => {
        let { product, maxPrice = 1000 } = req.query;

        Product.find(
            {
                $or: [
                    { product: { $regex: new RegExp(product), $options: 'i' } },
                    { category: { $regex: new RegExp(product), $options: 'i' } }
                ],
                price: { $lte: parseInt(maxPrice) }
            }
        )
            .limit(15)
            .exec((err, result) => {
                if (err) errorHandler(req, res, err);
                else successHandler(req, res, 'Product listed successfully', result);
            });

    }

}