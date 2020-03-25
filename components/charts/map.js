import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={ TOKEN }
      { ...viewport }
      onViewportChange={ setViewport }
    />
  );
}

export default Map;