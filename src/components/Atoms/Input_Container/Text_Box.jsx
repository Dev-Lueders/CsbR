

// This component renders a label next to an input box.
// Props:
// - labelText: The text to display in the label.
// - placeholderText: The placeholder for the input field.
// - value: The current value of the input.
// - onChange: The function to call when the input changes.
// - ...props: Any additional props (such as styling or className) that you want to pass to the input.
import React from 'react';
import propTypes from 'prop-types';

const Text_Box = ({
  labelText = 'Label:',
  placeholderText = 'Enter text here...',
  value,
  onChange,
  id = 'text-box',
  maxLength = 50, // Default max length is 50 characters
  inputStyle = {},
  containerStyle = {},
  labelStyle = {},
  ...props
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', ...containerStyle }}>
      <label htmlFor={id} style={{ marginRight: '0.5rem', ...labelStyle }}>
        {labelText}
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholderText}
        value={value}
        onChange={(e) => onChange (e.target.value)}
        maxLength={maxLength} // Limits the character count
        style={{ padding: '0.5rem', ...inputStyle }}
        {...props}
      />
    </div>
  );
};

Text_Box.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  placeholderText: propTypes.string,
  ariaLabel: propTypes.string,
  name:propTypes.string,
  labelText: propTypes.string,
  labelStyle:propTypes.object,
  id: propTypes.string,
  maxLength: propTypes.number,
  inputStyle: propTypes.object,
  containerStyle:propTypes.object,

}
export default Text_Box;