const { Product } = require('../models/Product');
const { Category } = require('../models/Category');
const { Offer } = require('../models/Offer');

module.exports = {
    insertDataIfEmpty: async () => {
        let products = await Product.find({}).lean();
        let categories = await Category.find({}).lean();
        let offers = await Offer.find({}).lean();
        console.log('Checking whether DB has data or not.....')
        if (products.length < 1) {
            console.log('Product data is getting inserted, please wait.....')
            let products = require('./product.json');
            try {
                await Product.insertMany(products);
            } catch (error) {
                console.log('Error: Unable to insert products data')
                console.log(error)
            }
        }
        if (categories.length < 1) {
            console.log('Category data is getting inserted, please wait.....')
            let categories = require('./category.json');
            try {
                await Category.insertMany(categories);
            } catch (error) {
                console.log('Error: Unable to insert categories data')
                console.log(error)
            }
        }
        if (offers.length < 1) {
            console.log('Offer data is getting inserted, please wait.....')
            let offers = require('./offer.json');
            try {
                await Offer.insertMany(offers);
            } catch (error) {
                console.log('Error: Unable to insert offers data')
                console.log(error)
            }

        }
        console.log('Application is ready......')
    }
}
