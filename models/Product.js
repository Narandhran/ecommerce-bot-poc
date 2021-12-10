const { model, Schema } = require('mongoose');

const productSchema = new Schema({
    spec: {
        type: String,
    },
    variants: {
        type: String,
    },
    product_url: {
        type: String,
    },
    category: {
        type: String,
    },
    product: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    price: {
        type: String
    }
}, { timestamps: true, collection: 'product' });

var Product = model('product', productSchema);
module.exports = { Product };

