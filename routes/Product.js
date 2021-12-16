const productCtl = require('../controllers/Product');

module.exports = app => {
    app.get('/product/fetch', productCtl.fetchProductByCategory);
    app.get('/product/fetch_regex', productCtl.fetchRegex);
}