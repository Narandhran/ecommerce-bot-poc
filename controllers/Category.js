const { Category } = require('../models/Category');
const { successHandler, errorHandler } = require('../utils/handler');

module.exports = {
    fetchAll: (req, res , next) => {
        Category
        .find()
        .exec
        ((err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Category listed successfully', result);
        })
    },
    AddCategory : (req,res,next) => {
        Category.create(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Category created successfully', result);
        });    
    }
}