import { MapContainer, TileLayer } from "react-leaflet";

export default function MapView() {
  return (
    <MapContainer 
      center={[19.357, -99.064]}  // Coordenadas de Iztapalapa
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
    </MapContainer>
  );
}
