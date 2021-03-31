import Head from 'next/head';
import react, { Component } from 'react';
import Title from '../components/Title/Title';
import Navbar from '../components/Navbar/Navbar';
import JsmpegPlayer from '../components/JsmpegPlayer/JsmpegPlayer';
import Mapper from '../components/Mapper/Mapper';

const videoOptions = {
  poster: 'https://cycjimmy.github.io/staticFiles/images/screenshot/big_buck_bunny_640x360.jpg',
  audio: false,
  autoplay: true,
  autoSetWrapperSize: true
};

const videoOverlayOptions = { audio: false };

class DroneSensors extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  async componentDidMount() {
    var response = await fetch('/api/gps/points');
    var respJson = await response.json()
    var points =[];
    for (var point of respJson.gpsPoints){
      points.push({
        latitude: point.lat,
        longitude: point.lon
      })
    }
    this.setState({
      error: null,
      isLoaded: true,
      points: points
    });
  }

  render() {
    let jsmpegPlayer = null;

    if (!this.state.isLoaded) {
      return (
        <div>
          <div>
            <Title />
            <Navbar />
          </div>
          <div>Loading Data from Drone</div>
        </div>
      );
    }
    return (
      <div>
        <div>
          <Title />
          <Navbar />
        </div>
        <div className="drone-video-header">
          <h2>Drone Video Stream</h2>
        </div>
        <div className="drone-video-wrapper">
          <JsmpegPlayer
            wrapperClassName="drone-video-wrapper"
            videoUrl="ws://localhost:3081"
            options={videoOptions}
            overlayOptions={videoOverlayOptions}
            onRef={ref => jsmpegPlayer = ref}
          />

          <div className="drone-buttons-wrapper">
            <button onClick={() => jsmpegPlayer.play()}>Play</button>
            <button onClick={() => jsmpegPlayer.pause()}>Pause</button>
            <button onClick={() => jsmpegPlayer.stop()}>Stop</button>
          </div>
        </div>
        <div className="drone-gps-container">
          <div className="drone-gps-header">
            <h2>Drone GPS Map</h2>
          </div>
          <div className="drone-gps-body">
            <Mapper points={this.state.points}></Mapper>
          </div>
        </div>
      </div>

    )

    /*
        return (
          <div>
            <div>
              <Title />
              #<Navbar />
            </div>
            <div className="drone-sensors-header">
    
            </div>
            <div className="drone-sensors-video">
            <JsmpegPlayer
                wrapperClassName="video-wrapper"
                videoUrl="ws://localhost:3081"
                options={videoOptions}
                overlayOptions={videoOverlayOptions}
              />
            </div>
          </div>
        );
        */
  }
}

export default DroneSensors;