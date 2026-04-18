import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { businessConfig } from '../config/business'

// Fijar el ícono por defecto de leaflet
const defaultIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

export default function Map() {
  const { latitude, longitude, city } = businessConfig.location

  return (
    <section id="location" className="py-20 px-4 md:px-0 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Nos Encontramos en</h2>
        <p className="section-subtitle">Visítanos en nuestras instalaciones</p>

        <div className="rounded-lg overflow-hidden shadow-lg h-96 md:h-96">
          <MapContainer
            center={[latitude, longitude]}
            zoom={13}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]} icon={defaultIcon}>
              <Popup>{city}</Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">{businessConfig.business.address}</p>
          <a
            href={`https://www.google.com/maps/search/${latitude},${longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4"
          >
            Abre en Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
