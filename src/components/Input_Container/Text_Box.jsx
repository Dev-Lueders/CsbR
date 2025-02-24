

// This component renders a label next to an input box.
// Props:
// - labelText: The text to display in the label.
// - placeholderText: The placeholder for the input field.
// - value: The current value of the input.
// - onChange: The function to call when the input changes.
// - ...props: Any additional props (such as styling or className) that you want to pass to the input.
import React from 'react';

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
        onChange={onChange}
        maxLength={maxLength} // Limits the character count
        style={{ padding: '0.5rem', ...inputStyle }}
        {...props}
      />
    </div>
  );
};

export default Text_Box;