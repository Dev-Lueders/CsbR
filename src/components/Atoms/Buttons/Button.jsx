

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Button_btn = ({ label, onClick, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (navigateTo) navigate(navigateTo);
  };

  return (
    <button type="button" onClick={handleClick}>
      {label}
    </button>
  );
};

Button_btn.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  navigateTo: PropTypes.string,

};

Button_btn.defaultProps = {
  label: "Submit",
  onClick: () => { },
  navigateTo: "",
};

export default Button_btn;