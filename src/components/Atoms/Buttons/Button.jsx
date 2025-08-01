

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Button_btn = ({ label, onClick, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (navigateTo) navigate(navigateTo);
  };

  return (
    <button type="type" onClick={handleClick}>
      {label}
    </button>
  );
};

Button_btn.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  navigateTo: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit","reset"]),

};

Button_btn.defaultProps = {
  label: "Submit",
  onClick: () => { },
  navigateTo: "",
  type:"button",
};

export default Button_btn;