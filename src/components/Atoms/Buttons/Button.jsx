import axios from "axios";
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
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
  isVisible
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
  zIndex: PropTypes.number,

};

export default Button_btn;

