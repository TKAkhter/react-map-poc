import * as React from 'react';
import Map, {NavigationControl, Layer} from 'react-map-gl';
import Navbar from './components/navbar.js';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './App.css';

function App() {
  const testLayer1 = {
    id: 'testLayer1',
    type: 'fill',
    source: '8928bc4e-2022-4de7-b0ea-c32e6cbd6317',
    'source-layer': 'georefswitzerlandgemeindemillesimepublic',
    filter: ['==', 'gem_code', '[\"0001\"]'],
    paint: {
      'fill-color': '#4E3FC8',
      'fill-opacity': 0.2,
      'fill-outline-color': '#000',
    }
  };
  const testLayer2 = {
    id: 'testLayer2',
    type: 'fill',
    source: '8928bc4e-2022-4de7-b0ea-c32e6cbd6317',
    'source-layer': 'georefswitzerlandgemeindemillesimepublic',
    filter: ['in', 'gem_code', '[\"0002\"]', '[\"0003\"]', '[\"0004\"]', '[\"0005\"]'],
    paint: {
      'fill-color': '#ff0000',
      'fill-opacity': 0.1,
      'fill-outline-color': '#000'
    }
  };
  return (
    <div className="App">
      <Navbar/>
      <Map mapLib={maplibregl} 
        initialViewState={{
          longitude: 16.62662018,
          latitude: 49.2125578,
          zoom: 14
        }}
        style={{width: "100%", height: " calc(100vh - 77px)"}}
        mapStyle="https://api.maptiler.com/maps/6990e1f9-53c1-413b-adb1-1d6dd9c31ce8/style.json?key=uK1h6W8KKzJH5mMcQi4t"
      >
        <NavigationControl position="top-left" />
        <Layer {...testLayer1} />
        <Layer {...testLayer2} />
      </Map>
    </div>
  );
}

export default App;
