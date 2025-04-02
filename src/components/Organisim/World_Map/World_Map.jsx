// Still need to add functioning for the map once results are displayed the keyboard functionality, ariaLive announcements 

import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import World_Map_Styles from "../../components_data/Organism_Data/World_Map_Styles.json";


const WorldMap = ({ containerId = "world_map",
  gridPosition = "1 / 1 / span 1 /span 1",
  ariaLabel = "World Map displaying global locations",
  locations = [],
  mapStyle = {},
  zIndex = 1,
  opacity = 1
   }) => {


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

    locations.forEach(({ latitude, longitude, label }) => {
      const marker = L.marker([latitude, longitude]).addTo(map);
      marker.bindPopup(label);
      marker._icon.setAttribute("aria-label", label);
    });

    // Cleanup: Remove the map when the component unmounts
    return () => {
      map.remove();
    };
  }, [containerId, locations]);

  return (
    <div
      id={containerId}
      style={{
        ...World_Map_Styles,
        display: "grid",
        gridArea: gridPosition
      }}
      role="application"
      aria-label={ariaLabel}
      tabIndex="0"
    ></div>
  );
};
  
WorldMap.propTypes = {
  containerId: PropTypes.string,
  gridPosition: PropTypes.string,
  ariaLabel: PropTypes.string,
  zIndex: PropTypes.object,
  mapStyle: PropTypes.object,
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired
    })
  )
};

WorldMap.defaultProps = {
  containerId: "world_map",
  gridPosition: "1 / 1 / span 2/ span 2",
  ariaLabel: "World Map displaying global locations",
  zIndex: 1,
  opacity: 1,
  mapStyle: {
    width: "100%",
    height: "500px",
  },
  locations: [{ latitude: 0.0, longitude: 0.0, label: "Null Island" }],
};

export default WorldMap;