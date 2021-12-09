const Contact = require('../controllers/Contactus');
const Category = require('../controllers/Category');
const Order = require("../controllers/Order")
module.exports = app => {

    //===========CONTACT US==============//
    app.get('/contactus/fetch_all', Contact.fetchAll);
    app.post('/contactus/create' , Contact.AddContact);

    //==============CATEGORY=============//
    app.get('/category/fetch_all', Category.fetchAll);
    app.post('/category/create' , Category.AddCategory);

    //==============ORDER===============//
    app.post('/track_order',Order.fetchAll)


}