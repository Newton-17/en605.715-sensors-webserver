const routes = require('express').Router();
const { Router } = require('express');
const videoStream = require('./src/api/video-stream/video-stream');
const gps = require('./src/api/gps/gps');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/video-stream', videoStream);
routes.use('/gps', gps);

module.exports = routes;