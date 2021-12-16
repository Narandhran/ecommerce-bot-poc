const categoryCtl = require('../controllers/Category');

module.exports = app => {

    app.get('/category/fetch_all', categoryCtl.fetchAll);
}