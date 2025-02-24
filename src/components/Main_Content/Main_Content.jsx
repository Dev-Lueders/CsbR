import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../components_styles.css";

// Accept both MC_Style and children props
const Main_Content = ({ MC_Style = {}, children }) => {
  return (
    <div className="main-content-box" style={MC_Style}>
      <h3 style={{ marginBottom: '5vh' }}>Main Content</h3>
      {/* Render any nested components here */}
      {children}
    </div>
  );
};

export default Main_Content;