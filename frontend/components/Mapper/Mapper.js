import react, { Component } from 'react';
import { Map, Marker } from "pigeon-maps"

const points = [
  {
    latitude: 27.8965933,
    longitude: -82.50469489999999
  },
  {
    latitude: 27.8966000,
    longitude: -83.50469489999999
  }
]

// Expects prop.points
export default class Mapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      points: points
    };
  }
  componentDidMount() {
    // Get GPS
    this.setState({
      error: null,
      isLoaded: true,
      mapsCenter: {
        latitude: 27.896576,
        longitude: -82.504670
      },
      points: this.props.points
    })
  }
  render() {
    
    if (!this.state.isLoaded) {
      return (
        <div>Loading Data from Drone</div>
      );
    }

    const markers = [];
    this.state.points.forEach(point => {
      markers.push(<Marker width={50} anchor={[point.latitude, point.longitude]} />)
    });
    console.log(markers);

    return (
      
      <Map height={500} defaultCenter={[this.state.mapsCenter.latitude, this.state.mapsCenter.longitude]} defaultZoom={11}>
         {markers}
      </Map>
    )
  }
}