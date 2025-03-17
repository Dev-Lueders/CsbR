import React from 'react';
import { useSelector } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import "../components_styles.css";

const MediaContainer = ({ children }) => { 
  const selector_MediaContainer = useSelector(state => state.boxState);

  return (
    <div
      className="box-container"
      style={{
        position: 'absolute',
        top: '6.8vh',
        right: '0vw',
        width: 'calc(50vw - 10vw)',
        height: '39.3vh',
        margin: '0',
        border: '2px solid black',
        padding: '20px',
        boxShadow: '10px 15px 5px rgba(211, 211, 211, 0.6)',
        backgroundColor: '#fff',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {children} {/* Accepts WorldMap as a child component */}
    </div>
  );
};

export default MediaContainer;