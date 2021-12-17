const categoryCtrl = require('../controllers/Contactus');

module.exports = app => {

    app.get('/contactus/fetch_all', categoryCtrl.fetchAll);
    app.post('/contactus/create', categoryCtrl.AddContact);
}