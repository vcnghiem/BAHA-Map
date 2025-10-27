mapboxgl.accessToken = 'pk.eyJ1IjoidmluY2VudG5naGllbSIsImEiOiJjbWg5Y2s2c3IwODR1MmpvbTJzM3Q5eTZqIn0.mRB-MTymbA4NHuNsZw5n3Q';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/vincentnghiem/cmh9cmt3d00pv01r52ayncqb0', // your Style URL goes here
  center: [-122.27, 37.87], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9 // starting zoom
    });