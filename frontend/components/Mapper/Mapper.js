import react, { Component } from 'react';
import { Map, Marker } from "pigeon-maps"

export default class Mapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }
  componentDidMount() {
    // Get GPS
    
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      this.setState({
        error: null,
        isLoaded: true,
        mapsCenter: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      })
    })
  }
  render() {
    if (!this.state.isLoaded) {
      return (
        <div>Loading Data from Drone</div>
      );
    }

    return (
      <Map height={500} defaultCenter={[this.state.mapsCenter.latitude, this.state.mapsCenter.longitude]} defaultZoom={11}>
        <Marker width={50} anchor={[this.state.mapsCenter.latitude, this.state.mapsCenter.longitude]} />
      </Map>
    )
  }
}