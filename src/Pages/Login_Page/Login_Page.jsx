import React, { useState } from "react";
import "../../components/components_styles.css";
import { useDispatch } from "react-redux";
// ⬇️ FIX: import from the LOGIN slice, not signup slice
import { loginClient } from "../../redux/features/auth/loginSlice";

import Text_Box from "../../components/Atoms/Input_Container/Text_Box";
import Button_btn from "../../components/Atoms/Buttons/Button";
import Generic_Form from "../../components/Molecules/Form/Generic_Form";
import { logout } from "../../../server/utils/logout";
const Login_Page = () => {
  const dispatch = useDispatch();

 const handleLogout = async () => {
    await logout({
      revokeUrl: "/api/auth/logout", // optional; remove if you don't have it yet
      navigateTo: "/Login_Page",     // where to land after logout
       axios: api,                 // pass your axios instance if you want
       onAfter: () => dispatch({ type: "auth/clear" }), // optional: clear Redux
    });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    clientname: "",
    password: "",
    remember: true, // set default “stay logged in” if you want
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const action = await dispatch(
      loginClient({
        clientname: formData.clientname.trim(),
        password: formData.password,
        remember: formData.remember,
      })
    );

    if (loginClient.fulfilled.match(action)) {
      // Success path
      console.log("Login success:", action.payload.client);
      // TODO: navigate('/dashboard') or set auth UI
    } else {
      const msg =
        action.payload?.message || action.error?.message || "Login failed";
      console.error("Login failed:", msg);
      setError(msg);
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>

      {/* Ensure Generic_Form renders a real <form onSubmit={...}> */}
      <Generic_Form onSubmit={handleSubmit}>
        <Text_Box
          id="clientname"
          labelText="Client"
          placeholderText="Enter Clientname"
          type="text"
          name="clientname"
          value={formData.clientname}
          onChange={handleInputChange}
        />

        <Text_Box
          id="password"
          labelText="Password"
          placeholderText="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          maxLength={36}
          value={formData.password}
          onChange={handleInputChange}
        />

        <div className="show-password-toggle" style={{ margin: "8px 0" }}>
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={toggleShowPassword} // ⬅️ just toggle, no arg
          />
          <label htmlFor="showPassword" style={{ marginLeft: 6 }}>
            Show Password
          </label>
        </div>

        <div style={{ margin: "8px 0" }}>
          <input
            type="checkbox"
            id="remember"
            name="remember"
            checked={formData.remember}
            onChange={handleInputChange}
          />
          <label htmlFor="remember" style={{ marginLeft: 6 }}>
            Stay logged in
          </label>
        </div>

        {/* Submit button INSIDE the Generic_Form */}
     

        {error && (
          <div style={{ color: "crimson", marginTop: 10 }}>{error}</div>
        )}
      </Generic_Form>
    </div>
  );
};

export default Login_Page;
