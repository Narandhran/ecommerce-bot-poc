const { model, Schema } = require('mongoose');

const categorySchema = new Schema({
    category: {
        type: String,
    },
    url: {
        type: String,
    }
}, { timestamps: true, collection: 'category' });

var Category = model('category', categorySchema);
module.exports = { Category };

