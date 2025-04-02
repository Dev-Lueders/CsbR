import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Styles_Button from "../../Components_Data/Atom_Data/Default_Styles/Styles_Button.json"
// Action Placeholder (Modify when adding logic)
const buttonAction = (type, payload) => ({
  type,
  payload
});

const Button_btn = ({
  label,
  onClickAction,
  variant = "primary",
  size = "md",
  apiUrl,
  className = "",
  style = {},
   children, // Allows passing JSX content instead of just a label
  navigateTo, 
  gridPosition,
  isVisible,
  opacity,
  zIndex
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const defaultStyles = Styles_Button.default;
  const variantStyles = Styles_Button.variants[variant] || {};
  const sizeStyles = Styles_Button.sizes[size] || {};
  const combinedStyles = {
    ...defaultStyles,
    ...variantStyles,
    ...sizeStyles,
    ...style,
    opacity,
    gridArea: gridPosition,
    zIndex

  };
  const handleClick = async () => {
    if (onClickAction) {
      dispatch(buttonAction(onClickAction, {}));
    }

    if (apiUrl) {
      try {
        const response = await axios.get(apiUrl);
        console.log("API Button Response:", response.data);
      } catch (error) {
        console.error("API Button Error:", error);
      }
    }
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return isVisible ?(
    <button 
      onClick={handleClick}
      className={className}
      style={combinedStyles}
      aria-label={label || "button"}
      role="button"
      onKeyDown ={(e) => (e.key === "Enter" || e.key === " ") && handleClick ()}
    >
    {children || label}
    </button>
  ):null;
};

// Define PropTypes for better documentation and validation
Button_btn.propTypes = {
  label: PropTypes.string,
  onClickAction: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  apiUrl: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  navigateTo: PropTypes.string,
  gridPosition: PropTypes.object,
  isVisible: PropTypes.bool,
  opacity:PropTypes.number,
  zIndex: PropTypes.number
};

Button_btn.defaultProps = {
  label: "Click Me",
  variant: "primary",
  size: "md",
  className: "",
  style: {},
  gridPosition: {gridColumn: "30/ 34", gridRow: "2/5"},
  isVisible: true,
  opacity: 1,
  zIndex:3
};

export default Button_btn;

