const config = {
  app: {
    nodeEnv: process.env.NODE_ENV || 'production',
    port: parseInt(process.env.PORT) || 3080
  },
  remoteHost: {
    ip: process.env.REMOTE_HOST_IP || '192.168.4.1',
    gpsPort: parseInt(process.env.GPS_PORT) || 2947,
    rtspURLExtension: '/picam',
    rtspURLPort: 8554
  }
}

module.exports = config;