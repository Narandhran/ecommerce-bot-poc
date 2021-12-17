const orderCtrl = require('../controllers/Order');

module.exports = app => {
    app.get('/track_order', orderCtrl.fetchAll)
    app.get('/order/all', orderCtrl.orderAll)
    app.get('/order_detail/:order_id', orderCtrl.orderById)
}