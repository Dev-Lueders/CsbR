import React, { useState } from "react";

const Drop_Down = ({ options, label, onSelect, containerStyle, dropdownStyle }) => {
  const [isOpen, setIsOpen] = useState(false);  // Controls dropdown visibility
  const [selectedOption, setSelectedOption] = useState(null);  // Stores selected value

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle option selection
  const handleSelect = (option) => {
    setSelectedOption(option);  // Update selected option
    onSelect(option.value);  // Send selected value to parent
    setIsOpen(false);  // Close dropdown after selection
  };

  return (
    <div style={{ position: "relative", display: "inline-block", ...containerStyle }}>
      {/* Dropdown button */}
      <button
        onClick={toggleDropdown}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "200px",
        }}
      >
        {selectedOption ? selectedOption.label : label}
        <span style={{ marginLeft: "10px" }}>▼</span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            zIndex: "1000",
            ...dropdownStyle,
          }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: index !== options.length - 1 ? "1px solid #ddd" : "none",
                backgroundColor: "#fff",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#f1f1f1")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#fff")}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Drop_Down;
