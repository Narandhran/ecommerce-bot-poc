const { model, Schema } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  is_active: {
    type: Boolean,
    default:true,
    required: true
  },
  offer :{
    type: Double,
    required: false
  }
}, { timestamps: true, collection: 'category' });

var Category = model('category', categorySchema);
module.exports = { Category };