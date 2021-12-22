const { Order } = require('../models/Order');
const { successHandler, errorHandler } = require('../utils/handler');
const { OrderDetail } = require('../models/OrderDetail')

const order_data = require("../order.json");

module.exports = {
    fetchAll: (req, res) => {
        let tracking_number = req.body.tracking_number || 112334455;
        return res.send(`https://www.dhl.com/in-en/home/tracking.html?locale=true&tracking-id=${tracking_number}`)
    },
    orderAll: async (req, res) => {
        await Order.find({})
            .lean()
            .exec((err, result) => {
                if (err) errorHandler(req, res, err);
                else successHandler(req, res, 'Order listed successfully', result);
            })
    },
    orderById: async (req, res) => {
        let { order_id } = req.params
        if (!order_id) {
            err["message"] = "Please send the order id";
            errorHandler(req, res, err);
        }
        await Order.findOne({ id: order_id }, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Order listed successfully', result);
        })
    }
}