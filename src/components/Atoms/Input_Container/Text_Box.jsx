// will need to dynamically have the grid placed
// write some conditional statements for how much text can be received
// This component renders a label next to an input box.
// Props:
// - labelText: The text to display in the label.
// - placeholderText: The placeholder for the input field.
// - value: The current value of the input.
// - onChange: The function to call when the input changes.
// - ...props: Any additional props (such as styling or className) that you want to pass to the input.
// use teh start and end grid with gridColumn and gridRow to position the text box
// minimize the amount of variables to pass, have one universal variable for everything that is not either gridColumn, gridRow,zIndex,isVisible, opacity, these will be the building  blocks to using the gridPage

import React from "react";
import PropTypes from "prop-types";
import "../../components_styles.css";

const Text_Box = ({
  id = "def_text-box",
  name = "",
  type = "text",
  value,
  onChange,
  placeholderText = " Add Inline styling to change this text",
  maxLength = 40,
  className = "",
  style = {},
  labelText = "",
  isVisible = true,
  ...props
}) => {
  if (!isVisible) return null;

  return (
    <div
      className={`text-box-container ${className}`}
      style={{
        display: "grid",
        alignItems: "center",
        ...style,
      }}
    >
      <input
        id={id}
        name={name}
        className={`text-box-input ${className}`}
        placeholder={placeholderText}
        style={{
          width: "80%",
          height: "80%",
        }}
        maxLength={maxLength}
        aria-label={labelText}
        type={type}
        value={value}
        onChange={onChange}
        
        {...props}
      />
    </div>
  );
};

Text_Box.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  labelText: PropTypes.string,
  className: PropTypes.string,
  placeholderText: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
  style: PropTypes.object,
  isVisible: true,
  type: PropTypes.string,
};

Text_Box.defaultProps = {
  labelText: "",
  placeholderText: "",
  id: "text-box",
  name: "",
  maxLength: "400",
  style: {},
  className: "",
  isVisible: false,
  type: "text",
};

export default Text_Box;
