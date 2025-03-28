import React from "react";
import PropTypes from "prop-types";

const Check_Box = ({
  id,
  label,
  checked = false,
  onChange = () => {},
  disabled = false,
  className = "",
  style = {},
  gridPosition = "auto",
}) => {
  const handleChange = (e) => {
    onChange(e.target.checked);
  };

  return (
    <div
      className={`checkbox-container ${className}`}
      style={{ ...style, gridArea: gridPosition }}
    >
      <input
        type="checkbox"
        id={id}
        className="checkbox-input"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        aria-checked={checked}
        aria-disabled={disabled}
      />
      <label
        htmlFor={id}
        className={`checkbox-label ${disabled ? "disabled" : ""}`}
      >
        {label}
      </label>
    </div>
  );
};

Check_Box.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  gridPosition: PropTypes.string,
};

export default Check_Box;
