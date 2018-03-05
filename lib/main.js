mapboxgl.accessToken = "pk.eyJ1IjoidHJpZGlwMTkzMSIsImEiOiJjajVobTc1c3MxeXNyMnFucXV5cnVyOWhvIn0.xAsGvnYs57UMqlwdAQP5nA";
var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/tridip1931/cjeb8qivf31se2snvzdz9s3b9", // stylesheet location
  center: [77.631, 12.973], // starting position [lng, lat]
  zoom: 13.33 // starting zoom
});
map.scrollZoom.disable();