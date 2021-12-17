const { model, Schema } = require('mongoose');
const contactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile_no: {
    type: String,
    required: true
  },
  query: {
    type: String
  },
  category: {
    type: String
  }
}, { timestamps: true, collection: 'contactus' });

var Contact = model('contactSchema', contactSchema);
module.exports = { Contact };