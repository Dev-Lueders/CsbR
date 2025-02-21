// File: components/Input_Container/CheckBox.jsx
import React from 'react';
import PropTypes from 'prop-types';


const Check_Box = ({ id, label, checked, onChange }) => {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={id}
        className="checkbox-input"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="checkbox-label">
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
};

Check_Box.defaultProps = {
  checked: false,
  onChange: () => {},
};

export default Check_Box;