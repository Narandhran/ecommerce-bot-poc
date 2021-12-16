const { Order } = require('../models/Order');
const { successHandler, errorHandler } = require('../utils/handler');
const {OrderDetail} = require('../models/OrderDetail')

const order_data = require("../order.json");

module.exports = {
    fetchAll: (req, res , next) => {
        let tracking_number = req.body.tracking_number || 112334455;
        return res.send(`https://www.dhl.com/in-en/home/tracking.html?locale=true&tracking-id=${tracking_number}`)
    },
    orderAll : (req,res, next) => {
        try {
            // Order.find({})
            // .lean()
            // .exec((err, result) => {
            //     if (err) errorHandler(req, res, err);
            //     else successHandler(req, res, 'Order listed successfully', result);    
            // })
            return res.send(order_data)

        }
        catch (err) {
            console.log("Error on Order retrieving",err);
            err["message"] = "Error on Order retrieving";
            errorHandler(req,res,err)
        }
    },
    orderById : (req,res, next) => {
        try {
            let order_id = req.params.order_id 
            if (!order_id) {
                err["message"] = "Please send the order id";
                errorHandler(req, res, err);
            }
            var order_details = require("../order.json");

            // Order.findOne({
            //     order_id : req.body.order_id
            // })
            // .lean()
            // .exec((err, result) => {
            //     if (err) errorHandler(req, res, err);
            //     else successHandler(req, res, 'Order listed successfully', result);    
            // })
            let result =  order_details.filter((k,i) => {
                return  parseInt(k.id) === parseInt(order_id)
            }
            );
            return res.send(result);

        }
        catch (err) {
            console.log("Error on Order retrieving",err);
            err["message"] = "Error on Order retrieving";
            errorHandler(req,res,err)
        }
    },
    
}