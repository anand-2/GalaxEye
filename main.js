import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import VectorImageLayer from 'ol/layer/VectorImage';
import LayerGroup from 'ol/layer/Group';
import GeoJSON from 'ol/format/GeoJSON';
import TileLayer from 'ol/layer/Tile';

import View from 'ol/View';
import { Projection } from 'ol/proj';
import { format } from 'ol/coordinate';
import GeoJSON from 'ol/format/GeoJSON';




window.onload = init;

function init(){
  const map = new Map({
    view: new View({
      center: [-8576200.728638152, 4706112.609905928],
      zoom: 13,
      maxZoom : 20,
      minZoom : 2,
    }),
    
    target: 'map',
  
  });

  const openStreetStandard = new TileLayer({
    source : new OSM(),
    visible : true,
    title : "OSMStandard"
  })

  const openStreetHumanitarian = new TileLayer({
    source : new OSM({
      url : 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
    }),
      title : "OSMHumanitarian",
      visible: false
  }) 
 
  map.addLayer(openStreetStandard)




//   Vector Layers

const GeoJSONLandmark = new VectorImageLayer({
  source : new VectorSource({
    url : 'https://github.com/anand-2/GalaxEye/blob/master/data/map.geojson',
    format: new GeoJSON({ 
      dataProjection: 'EPSG:4326',
     featureProjection: 'EPSG:3857' })
  }),
  visible : true,
  title: 'Landmarks'
})

map.addLayer(GeoJSONLandmark)
}
 