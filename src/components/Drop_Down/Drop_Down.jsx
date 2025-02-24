import React from "react";

const Drop_Down = ({ options, label, onChange, containerStyle, selectStyle }) => {
  return (
    <div style={{ ...containerStyle }}>
      <label style={{ fontWeight: "bold", marginBottom: "5px" }}>{label}</label>
      <select 
        onChange={(e) => onChange(e.target.value)}
        style={{ 
          width: "100%", 
          padding: "10px", 
          borderRadius: "5px", 
          border: "1px solid #ccc", 
          ...selectStyle 
        }}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Drop_Down;