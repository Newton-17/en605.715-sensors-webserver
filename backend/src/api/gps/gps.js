const gpsd = require('node-gpsd');
const routes = require('express').Router();
const config = require('../../config/config-dev');

gps_points = [];

function startListener() {
    console.log("Attempting to Connect to GPSD")
    var listener = new gpsd.Listener({
        port: config.remoteHost.gpsPort,
        hostname: config.remoteHost.ip,
        logger:  {
            info: function() {},
            warn: console.warn,
            error: console.error
        },
        autoReconnect: 5,        // every 5 second
        parse: true
    });

    listener.on('connected', () => {
        console.log('Gpsd connected')
        listener.watch();
    })

    listener.on('error', err => {
        console.log(`Gpsd error: ${err.message}`)
    })

    listener.on('TPV', data => {
        gps_points.push(data);
    })

    listener.connect();
    
}

routes.get('/points', function (req, res) {
    res.send({ "gpsPoints": gps_points });
});

startListener();
module.exports = routes;