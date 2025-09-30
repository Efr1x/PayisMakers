const map = new maplibregl.Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/style.json',
  center: [-96.9279, 18.889], // Coordenadas Córdoba, Veracruz
  zoom: 13
});

// marcador de ejemplo
const marker = new maplibregl.Marker()
  .setLngLat([-96.9279, 18.889])
  .setPopup(new maplibregl.Popup().setHTML("<b>Casa en Córdoba</b><br><a href='casa.html?id=montana'>Ver en 360°</a>"))
  .addTo(map);