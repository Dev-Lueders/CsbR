import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const WorldMap = ({ containerId = "world_map", width = "50vw", height = "50vh" }) => {
  useEffect(() => {
    // Get the container by the provided containerId
    const mapContainer = document.getElementById(containerId);
    if (mapContainer && mapContainer._leaflet_id) {
      // If a map already exists in this container, remove its reference
      mapContainer._leaflet_id = null;
    }

    // Initialize the map in the specified container
    const map = L.map(containerId).setView([20, 0], 2);

    // Add a tile layer from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Cleanup: Remove the map when the component unmounts
    return () => {
      map.remove();
    };
  }, [containerId]);

  return <div id={containerId} style={{ width, height }}></div>;
};

export default WorldMap;