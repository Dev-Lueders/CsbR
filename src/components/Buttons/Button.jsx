import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

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
}) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    if (onClickAction) {
      dispatch(buttonAction(onClickAction, {}));
    }

    if (apiUrl) {
      try {
        const response = await axios.get(apiUrl);
        console.log("API Response:", response.data);
      } catch (error) {
        console.error("API Error:", error);
      }
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
};

export default Button_btn;