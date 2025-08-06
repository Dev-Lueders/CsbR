import React from "react";
import "../../components/components_styles.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { loginClient } from "../../redux/features/signup/signupSlice"
import { useState } from "react";
import Text_Box from "../../components/Atoms/Input_Container/Text_Box";
import Button_btn from "../../components/Atoms/Buttons/Button";
import Check_Box from "../../components/Atoms/Check_Box/Check_Box";
import B_Navbar from "../../components/Atoms/NavBar/B_Navbar";
import Generic_Form from "../../components/Molecules/Form/Generic_Form";


const Login_Page = () => {
  const dispatch = useDispatch();
  // const toggleShowPassword = () => setShowPassword(prev => !prev);
  const [showPassword, setPassword] = useState(false);
  const [formData, setFormData] = useState({
    clientname: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const toggleShowPassword = () => {
    setPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Handle submit Clientname:", formData.clientname);
    console.log("Handle submit Password:", formData.password);
    
    try {
      const result = await dispatch(loginClient({
        clientname: formData.clientname,
        password: formData.password
      }));

      console.log("Full result from loginClient dispatch:", result);

      if (!result) {
        console.error("No Result returned from loginClient.");
        return;
}

      if (result.meta.requestStatus === "fulfilled") {
        console.log("Login Success:", result.payload);
      } else {
        console.log("if meta block clientname", formData.clientname);
        console.log("if meta block password",formData.password);
        console.error("Login Failed:", result.error?.message || result.payload?.message ||JSON.stringify(result));
      }
    } catch (err) {
      console.error("Login Error:", err);
    }
  }
  //   try {
  //     const res = await axios.post("http://localhost:5000/api/login", formData);

  //     if (res.data.token) {
  //       dispatch(loginClient({ token: res.data.token, clientname: formData.clientname }));
  //       console.log("Login successful:", res.data);
  //     } else {
  //       console.error("Login failed:", res.data.message);
  //     }
  //   } catch (error) {
  //     console.error("Login error:", error.response?.data || error.message);
  //   }
  // };

  return (
    <div className="login-page">

      <h2>Login</h2>
      <Generic_Form onSubmit={handleSubmit}
      >
  
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
          id="Password_id"
          labelText="Password"
          placeholderText="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          maxLength={36}
          value={formData.password}
          onChange={handleInputChange}
        />

        <div className="show=password-toggle">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={() => toggleShowPassword(!showPassword)}
          />
    
          <label htmlFor="showPassword"> Show Password</label>
    
        </div>
        
      </Generic_Form>
    
    </div>
    
  );
};

export default Login_Page;
