const clientInfo = require('../clientInfo');

module.exports.init = function (app) {
    const route = '/api/clientHostname/';

    app.get(route, function (req, res) {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log('ip', ip);

        clientInfo.getHostname(ip, function (clientDetails) {
            res.setHeader('Content-Type', 'application/json');
            res.send(
                JSON.stringify(
                    clientDetails
                )
            );
        });

    });
};