mapboxgl.accessToken = "pk.eyJ1IjoiamluYWxmb2ZsaWEiLCJhIjoiY2psejFzeTZ3MXM3ZDNwcDFwbmd4bzN5aCJ9.t6vJnaZWZy8BoRloDkGIbw";

/* Map: This represents the map on the page. */
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/outdoors-v10",
  zoom: 14.0,
  center: [77.60255, 12.89562],
  interactive: false
});

map.on("load", function () {
  /* Image: An image is loaded and added to the map. */
  map.loadImage("../img/custom-marker.png", function (error, image) {
    if (error) throw error;
    map.addImage("custom-marker", image);
    /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
    map.addLayer({
      id: "markers",
      type: "symbol",
      /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [{ "type": "Feature", "geometry": { "type": "Point", "coordinates": ["77.602547", "12.8956152"] } }]
        }
      },
      layout: {
        "icon-image": "custom-marker",
        "text-field": "Indian Institute of Management",
        "text-size": 12,
        "text-offset": [0, 3]
      }
    });
  });
});
map.scrollZoom.disable();