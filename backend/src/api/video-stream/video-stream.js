const routes = require('express').Router();
var Stream = require('node-rtsp-stream')

const rtspURL = 'rtsp://192.168.1.120:8554/picam';

function createStream() {
  stream = new Stream({
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

createStream();
module.exports = routes;
