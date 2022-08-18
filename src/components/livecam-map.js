import L from 'leaflet'
import React, { Component, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLng } from 'leaflet';
import './livecam-map.css';
import RainViewer from './rain-viewer';
import NightRegion from './night-region';
import LiveCam from './livecam';

function LocationMarker() {
    const [position, setPosition] = useState(new LatLng(35.6809591, 139.7673068))
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        if(position!=null) {
          setPosition(new LatLng( latitude, longitude ));
        }
      });
    }
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

export default class LiveCamMap extends Component {
  render() {
    const position = [35.6809591, 139.7673068];
    const zoom = 7
    const scrollWheelZoom = true
    const worldCopyJump = true
    return (
      <MapContainer center={position} zoom={zoom} scrollWheelZoom={scrollWheelZoom} worldCopyJump={worldCopyJump}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <NightRegion
            fillColor='#00345c'
            color='#001a2e'
            refreshInterval={1000} // custom refresh rate in milliseconds, default set to 5000ms
          /> */}
        <LocationMarker />
        <LiveCam />
        <RainViewer />
      </MapContainer>
    )
  }
}