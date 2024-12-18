import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define el estilo del contenedor del mapa
const containerStyle = {
  width: '100%',
  height: '400px', // Ajusta la altura según tus necesidades
};

// Coordenadas del centro del mapa
const center = {
  lat: 40.7128,  // Latitud (Ejemplo: Nueva York)
  lng: -74.0060, // Longitud (Ejemplo: Nueva York)
};

const MapComponent = () => {
  return (
    // Carga el script de Google Maps con tu API Key
    <LoadScript googleMapsApiKey="TU_GOOGLE_MAPS_API_KEY">
      {/* Google Map Component */}
      <GoogleMap
        mapContainerStyle={containerStyle} // Estilo del contenedor
        center={center} // Coordenadas del centro del mapa
        zoom={10} // Nivel de zoom
      >
        {/* Agregar marcador en las coordenadas proporcionadas */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
