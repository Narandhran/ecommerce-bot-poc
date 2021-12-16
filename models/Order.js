const { model, Schema } = require('mongoose');

const orderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  is_active: {
    type: Boolean,
    default: true,
    required: true
  },
  amount: {
    type: Number,
    required:true
  },
  order_number:{
    type: String,
    required: true
  }
}, { timestamps: true, collection: 'order' });

var Order = model('order', orderSchema);
module.exports = { Order };