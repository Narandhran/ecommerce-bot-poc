const { model, Schema } = require('mongoose');

const orderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  order_id :[{ type: Schema.ObjectId, ref: 'Order' }],
  is_active: {
    type: Boolean,
    default: true,
    required: true
  },
  amount: {
    type: Number,
    required:true
  }
}, { timestamps: true, collection: 'order-detail' });

var OrderDetail = model('order-detail', orderSchema);
module.exports = { OrderDetail };