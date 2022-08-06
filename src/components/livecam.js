import React, { useState, useEffect } from 'react'
import { Marker, Popup } from 'react-leaflet'

const fetchGeoJSON = async () => {
  const res = await fetch("https://script.google.com/macros/s/AKfycbxGauS5tnTMvbcdKL1eSVuxagA38pp8nHPnTkXfU5oONn8ICzxTiWMg4QB87kS1GF8o/exec");
  const data = await res.json()
  return data
}

const LiveCam = () => {
  const [livecams, setLiveCamData] = useState()

  useEffect(() => {
    fetchGeoJSON().then(liveCamData => setLiveCamData(liveCamData))
  }, [])

  return (
    <>
    {livecams && livecams.features.map((livecam,i) => (
      <Marker position = {livecam.geometry.coordinates}>
        <Popup>
          {livecam.properties.name}
          <iframe width="300" height="200" src={livecam.properties.description} title="LiveCam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Popup>
      </Marker>
    ))}
    </>
  )
}

export default LiveCam;