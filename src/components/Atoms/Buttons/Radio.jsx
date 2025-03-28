import React from "react";
import PropTypes from "prop-types";

const RadioButton = ({
  label,
  name,
  value,
  checked,
  onChange,
  disabled = false,
  className = "",
  style = {},
  gridPosition,
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <label
      className={`radio-button-container ${className}`}
      style={{ ...style, gridArea: gridPosition }}
      aria-label={label}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        aria-checked={checked}
        role="radio"
      />
      <span className="radio-checkmark"></span>
      {label && <span className="radio-label">{label}</span>}
    </label>
  );
};

// PropTypes Validation
RadioButton.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  gridPosition: PropTypes.string,
};

// Default Props
RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  className: "",
  style: {},
  gridPosition: "auto",
};

export default RadioButton;
