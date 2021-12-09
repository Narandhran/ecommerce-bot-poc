const { model, Schema } = require('mongoose');

const offerSchema = new Schema({
  offer: {
    type: String,
    required: true
  },
  product: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  url: {
    type: String
  }
}, { timestamps: true, collection: 'offer' });

var Offer = model('offer', offerSchema);
module.exports = { Offer };