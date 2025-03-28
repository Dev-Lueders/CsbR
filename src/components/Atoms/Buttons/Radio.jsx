import React from "react";
import PropTypes from "prop-types";
import "../../components_styles.css"; // Ensures styles align with your approach

const Radio_btn = ({
  name,
  value,
  checked = false, // Default to false if not provided
  onChange,
  children,
  gridPosition = {}, // Optional prop to handle grid positioning
  className = "", // For custom className to be passed if needed
}) => {
  return (
    <div
      className={`form-check ${className}`}
      style={gridPosition} // Inline styles to manage position on the grid
    >
      <input
        type="radio"
        className="form-check-input"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        aria-labelledby={`${name}-${value}`} // Accessible label for screen readers
      />
      <label
        className="form-check-label"
        id={`${name}-${value}`} // Associating label with input
      >
        {children || value} {/* Default to value if no children */}
      </label>
    </div>
  );
};

// Define PropTypes for better documentation and validation
Radio_btn.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
  gridPosition: PropTypes.object, // Optional prop for positioning
  className: PropTypes.string, // Optional custom className
};

// Define Default Props
Radio_btn.defaultProps = {
  checked: false, // Default to unchecked
  gridPosition: {}, // Default empty, no inline styles
  className: "", // No extra className by default
};

export default Radio_btn;
