const { Contact } = require('../models/Contactus');
const { successHandler, errorHandler } = require('../utils/handler');

module.exports = {
    fetchAll: async (req, res) => {
        await Contact
            .find()
            .populate('category')
            .exec
            ((err, result) => {
                if (err) errorHandler(req, res, err);
                else successHandler(req, res, 'Contact listed successfully', result);
            })
    },
    AddContact: async (req, res) => {
        await Contact.create(req.body, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Contactus created successfully', result);
        });
    }
}