const routes = require('express').Router();
var VideoStream = require('node-rtsp-stream')

const rtspURL = 'rtsp://192.168.1.120:8554/picam';

function createVideoStream() {
  videoStream = new VideoStream({
    name: 'name',
    streamUrl: rtspURL,
    wsPort: 3081,
    ffmpegOptions: { // options ffmpeg flags
      '-stats': '', // an option with no neccessary value uses a blank string
      '-r': 30 // options with required values specify the value after the key
    }
  });
}

routes.get('/', function (req, res){
  res.send({"rtspURL": rtspURL});
})

createVideoStream();
module.exports = routes;
