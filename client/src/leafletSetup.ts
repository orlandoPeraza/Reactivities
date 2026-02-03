import L from "leaflet";

// Configurar los iconos de Leaflet sin tocar prototype ni usar any
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet-images/marker-icon-2x.png",
  iconUrl: "/leaflet-images/marker-icon.png",
  shadowUrl: "/leaflet-images/marker-shadow.png",
});
