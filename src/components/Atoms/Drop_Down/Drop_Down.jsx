import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
const Drop_Down = ({ options = [], onChange, style, isVisible = true, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={dropdownRef}
      style={{
        position: "relative",
        display: "inline-block",
        ...style,
      }}
    >
      {label && (  //add
        <label
          style={{
            display: "block",
            // marginBottom: "4px",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          {label}
        </label> // add
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: "8px 12px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        ▼
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            zIndex: 9999,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            minWidth: "100px",
          }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange?.(option);
                setIsOpen(false);
              }}
              style={{
                // padding: "8px 12px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f5f5f5")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#fff")
              }
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  
};
Drop_Down.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  gridColumns: PropTypes.number,
  gridRows: PropTypes.number,
  style: PropTypes.object,
  maxOptionsVisible: PropTypes.number,
  isVisible: PropTypes.bool,
};

Drop_Down.defaultProps = {
  gridColumns: 1,
  gridRows: 1,
  style: {},
  isVisible: false,
  label: ""
 
};

export default Drop_Down;
