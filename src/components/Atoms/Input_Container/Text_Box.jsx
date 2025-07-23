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
  labelText = "",
  placeholderText = " Add Inline styling to change this text",
  value,
  onChange,
  id = "def_text-box",
  maxLength = 40,
  style = {},
  className = "",
  isVisible = true,
  type = "text",
  name = "",

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
        placeholder={placeholderText}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        type={type}
        aria-label={labelText}
        style={{
          width: "80%",
          height: "80%",
        }}
        {...props}
      />
    </div>
  );
};

Text_Box.propTypes = {
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  maxLength: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
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
