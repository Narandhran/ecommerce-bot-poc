const offerCtl = require('../controllers/Offer');

module.exports = app => {

    app.get('/offer/fetch_all', offerCtl.fetchAll);
}