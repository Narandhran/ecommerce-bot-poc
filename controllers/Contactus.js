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
        // Contact.create(req, (err, result) => {
        //     if (err) errorHandler(req, res, err);
        //     else successHandler(req, res, 'Contactus created successfully', result);
        // });    
        try {
            // Category.create(req, (err, result) => {
            //     if (err) errorHandler(req, res, err);
            //     else successHandler(req, res, 'Category created successfully', result);
            // }); 
            console.log(req.body , "=======REQ BODY=========");
            
            res.send("Successfully created")
        }
        catch (err) {
            console.log(err , "Error on contACT US CREATE")
            res.send("Failed to store")
        }
    }
}