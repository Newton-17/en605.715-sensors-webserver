const routes = require('express').Router();
const { Router } = require('express');
const videoStream = require('./src/api/video-stream/video-stream');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/video-stream', videoStream);

module.exports = routes;