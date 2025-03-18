import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
  icon = null,
  children, // Allows passing JSX content instead of just a label
  navigateTo, 
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return (
    <Button 
      variant={variant} 
      size={size} 
      onClick={handleClick} 
      className={className} 
      style={style}
    >
      {icon && <span className="me-2">{icon}</span>}
      {children || label}
    </Button>
  );
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
  icon: PropTypes.node,
  children: PropTypes.node,
  navigateTo: PropTypes.string,
};

export default Button_btn;