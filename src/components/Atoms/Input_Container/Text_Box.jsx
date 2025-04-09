

// This component renders a label next to an input box.
// Props:
// - labelText: The text to display in the label.
// - placeholderText: The placeholder for the input field.
// - value: The current value of the input.
// - onChange: The function to call when the input changes.
// - ...props: Any additional props (such as styling or className) that you want to pass to the input.
import React from 'react';
import PropTypes from 'prop-types';
import "../../components_styles.css"; // Ensure styling consistency

const Text_Box = ({
  labelText = 'Label:',
  placeholderText = 'Enter text here...',
  value,
  onChange,
  id = 'text-box',
  name = '',
  maxLength = 50,
  inputStyle = {},
  containerStyle = {},
  labelStyle = {},
  gridPosition = {}, // Allows precise positioning
  className = '', // Enables custom classNames
  ...props
}) => {
  return (
    <div
      className={`text-box-container ${className}`}
      style={{ display: 'flex', alignItems: 'center', ...containerStyle, ...gridPosition }}
    >
      <label htmlFor={id} style={{ marginRight: '0.5rem', ...labelStyle }}>
        {labelText}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholderText}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        style={{ padding: '0.5rem', ...inputStyle }}
        aria-label={labelText}
        {...props}
      />
    </div>
  );
};

// PropTypes Validation
Text_Box.propTypes = {
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  maxLength: PropTypes.number,
  inputStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  gridPosition: PropTypes.object,
  className: PropTypes.string,
};

// DefaultProps
Text_Box.defaultProps = {
  labelText: 'Label:',
  placeholderText: 'Enter text here...',
  id: 'text-box',
  name: '',
  maxLength: 50,
  inputStyle: {},
  containerStyle: {},
  labelStyle: {},
  gridPosition: {},
  className: '',
};

export default Text_Box;
