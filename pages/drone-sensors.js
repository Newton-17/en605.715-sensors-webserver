import Head from 'next/head';
import react, { Component } from 'react';
import Title from '../components/Title/Title';
import Navbar from '../components/Navbar/Navbar';
import Bargraph from '../components/Bargraph/Bargraph';

class DroneSensors extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  async componentDidMount() {
    this.setState({
      error: null,
      isLoaded: true,
    });

  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading Data for Drone Sensors</div>
    }

    return (
      <div>
        <div>
          <Title />
          <Navbar />
        </div>
        <div className="drone-sensors-header">

        </div>
        <div className="drone-sensors-video">
          <video id="test_video" controls autoplay src="rtsp://192.168.1.120/picam"></video>
        </div>
      </div>
    );
  }
}

export default DroneSensors;