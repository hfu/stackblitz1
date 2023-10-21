import { useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import { Map, NavigationControl } from 'react-map-gl/maplibre';
import { Protocol } from 'pmtiles';
import 'maplibre-gl/dist/maplibre-gl.css';

function App() {
  useEffect(() => {
    let protocol = new Protocol();
    maplibregl.addProtocol('pmtiles', protocol.tile);
    return () => {
      maplibregl.removeProtocol('pmtiles');
    };
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Map
        initialViewState={{
          longitude: 135,
          latitude: 35,
          zoom: 12,
          hash: true,
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="https://gsi-cyberjapan.github.io/optimal_bvmap/style/std.json"
      >
        <NavigationControl
          position="top-right"
          visualizePitch={true}
          showZoom={true}
          showCompass={true}
        />
      </Map>
    </div>
  );
}

export default App;
