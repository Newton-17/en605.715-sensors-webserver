const routes = require('express').Router();
const VideoStream = require('node-rtsp-stream')
const config = require('../../config/config-dev')

const rtspURL = 'rtsp://' + config.remoteHost.ip + ':' + config.remoteHost.rtspURLPort + config.remoteHost.rtspURLExtension;

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
