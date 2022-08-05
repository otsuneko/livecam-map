import L from 'leaflet'
import React, { Component } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import LiveCamMap from './components/livecam-map'

L.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

class App extends Component {
  render() {
    return (
      <>
        <LiveCamMap />
      </>
    );
  }
}

export default App;