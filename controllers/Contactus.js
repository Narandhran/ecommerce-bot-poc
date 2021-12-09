const { Contact } = require('../models/Contactus');
const { successHandler, errorHandler } = require('../utils/handler');

module.exports = {
    fetchAll: (req, res , next) => {
        Contact
        .find()
        .populate('category')
        .exec
        ((err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Contact listed successfully', result);
        })
    },
    AddContact : (req,res,next) => {
        Contact.create(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Contactus created successfully', result);
        });    
    }
}