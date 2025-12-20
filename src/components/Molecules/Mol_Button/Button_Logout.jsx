import { useState } from "react";
import PropTypes from "prop-types";
import Button_btn from "../../Atoms/Buttons/Button";

import logout from "../Mol_Button/Button_Logout";


const LogoutButton = ({
  label,
  loadingLabel,
  className,
  disabled,
  revokeUrl,
  navigateTo,
  axios,
  onAfter,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (isLoading || disabled) return;

    setIsLoading(true);
    try {
      await logout({
        revokeUrl,
        navigateTo,
        axios,
        onAfter,
      });
    } catch (error) {
      if (typeof onError === "function") {
        onError(error);
      } else {
        console.error("Logout failed:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button_btn
      type="button"
      className={className}
      onClick={handleClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? loadingLabel : label}
    </Button_btn>
  );
};

LogoutButton.propTypes = {
  label: PropTypes.string,
  loadingLabel: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  revokeUrl: PropTypes.string,
  navigateTo: PropTypes.string,
  axios: PropTypes.object,
  onAfter: PropTypes.func,
  onError: PropTypes.func,
};

LogoutButton.defaultProps = {
  label: "Log out",
  loadingLabel: "Logging out…",
  className: "",
  disabled: false,
  revokeUrl: "/api/auth/logout",
  navigateTo: "/",
  axios: undefined,
  onAfter: undefined,
  onError: undefined,
};

export default LogoutButton;
