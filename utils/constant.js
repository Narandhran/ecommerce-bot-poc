module.exports = {
    smsGateWay: {
        uri: (mobile, message,tempId) => {
            return `http://login.bulksmsgateway.in/sendmessage.php?user=Prasanna2020&password=prasanna@100&mobile=${mobile}&message=${message}&sender=VSWADH&type=3&template_id=${tempId}`;
        },
        template_id: {
            greeting: '1507161785277208587',
            otp: '1507161785286248233',
            approval: '1507161785258722031'
        }
    },
    aws: {
        secretAccessKey: '/Pgdui80x8WApBDQOwKIqG57GpgQhFHDCp/qsQ5/',
        accessKeyId: 'AKIAQXVJ7GKFM2J5IQ7A',
        region: 'ap-south-1'
    },
    s3: { basePath: 'https://vunity.s3.ap-south-1.amazonaws.com/' },
    jwt: {
        issuer: 'codupodu',
        audience: 'swadharmaa.com',
        salt: 10,
        expiration: '90d',
        algorithm: 'RS256'
    },
    razorPayTest: {
        key_id: 'rzp_test_TqKfdz25XUCI9M',
        key_secret: 't7M9Z0KQio0YUSkNpMF5ecn9'
    },
    razorPay: {
        key_id: 'rzp_live_D2mNOwytBENsMa',
        key_secret: 'siO65RBKc7QZoiIIr36EPiP2'
    },
    fcm: {
        SERVER_KEY: 'AAAAX9KJUC4:APA91bFbA2W9Oq6OWtDSn5TiHsVQuKQxR_M_4fwJKfW1bs--1fvKKUE6LZI_9OVDWcl9cMApWDRXGDCnljj4QUxBGr8BEfbxrNNVRUAXl_Z097Ni1vdiE3S4mCDWK4Q36Q1rCPx96Atx',
        announcement_topic: '/topics/unity-announcement'
    },
};