const storeCtl = require('../controllers/Store');

module.exports = app => {
    app.get('/store/fetch/:pincode', storeCtl.fetchByPin);
    app.get('/store/viewmap/:pincode', storeCtl.viewMapByPin);
}