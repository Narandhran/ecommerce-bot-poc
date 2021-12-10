const Contact = require('../controllers/Contactus');
const Category = require('../controllers/Category');
const Order = require("../controllers/Order");
const express = require('express');
const contactRouter = express.Router();


    //===========CONTACT US==============//
    contactRouter.get('/contactus/fetch_all', Contact.fetchAll);
    contactRouter.post('/contactus/create' , Contact.AddContact);

    //==============CATEGORY=============//
    contactRouter.get('/category/fetch_all', Category.fetchAll);
    contactRouter.post('/category/create' , Category.AddCategory);

    //==============ORDER===============//
    contactRouter.get('/track_order',Order.fetchAll)

module.exports = contactRouter;
