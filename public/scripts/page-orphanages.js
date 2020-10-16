//Create map
const map = L.map("mapid").setView([-22.7917975, -43.2962607, 1], 13);

//Create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//Create popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar das meninas <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg"/> </a>'
);

//Create and add marker
L.marker([-22.7917975, -43.2962607, 1], { icon })
  .addTo(map)
  .bindPopup(popup)
