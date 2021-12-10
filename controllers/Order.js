const { successHandler, errorHandler } = require('../utils/handler');

module.exports = {
    fetchAll: (req, res , next) => {
        let tracking_number = req.body.tracking_number || 112334455;
        return res.redirect(`https://www.dhl.com/in-en/home/tracking.html?locale=true&tracking-id=${tracking_number}`)
    }
}