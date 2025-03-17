import React from "react";
import PropTypes from "prop-types";
import "../components_styles.css" // Ensures styles align with your approach

const Radio_btn= ({ name, value, checked, onChange, children }) => {
  return (
    <div className="form-check">
      <input
        type="radio"
        className="form-check-input"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label">
        {children || value}
      </label>
    </div>
  );
};

Radio_btn.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Radio_btn;