const moment = require('moment');

var wrapError = (status, message, error) => {
    return {
        status: status || 400,
        message: message || 'No message provided',
        error: error || 'Undefined error, Contact admin!!'
    };
};

var wrapSuccess = (status, message, data, contentFound) => {
    return {
        status: status || 200,
        message: message || 'No message provided',
        data: data || {},
        contentFound: contentFound
    };
};

module.exports = {
    successHandler: async (request, response, message, result) => {
        let successResponse = {};
        response.status(200);
        if (result == undefined || result.length < 1)
            successResponse = wrapSuccess(204, message, result, false);
        else
            successResponse = wrapSuccess(200, message, result, true);
        response.send(successResponse).end();
    },
    errorHandler: async (request, response, error) => {
        let errorResponse = {};
        response.status(400);
        errorResponse = wrapError( 422, error.message, 'Validation Error');
        response.send(errorResponse).end();
    }
};