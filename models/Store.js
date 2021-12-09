const { model, Schema } = require('mongoose');

const storeSchema = new Schema({
    store: {
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            index: { type: '2dsphere', sparse: false },
            required: true
        }
    },
    pincode: {
        type: String
    },
    address: {
        type: String
    }
}, { timestamps: true, collection: 'store' });

var Store = model('store', storeSchema);
module.exports = { Store };