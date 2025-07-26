import React from "react";

import { useState } from "react";
import Text_Box from "../../components/Atoms/Input_Container/Text_Box";
import Button_btn from "../../components/Atoms/Buttons/Button";
import Check_Box from "../../components/Atoms/Check_Box/Check_Box";
import B_Navbar from "../../components/Atoms/NavBar/B_Navbar";
import Adding_Form from "../../components/Molecules/Form/Adding_Form";
const Login_Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = storedUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      console.log("Login Successful");
      localStorage.setItem("LoggedInUser", JSON.stringify(matchedUser));
    } else {
      console.log("Invalid username or password");
      alert("Login Failed: invalid username or password");
    }

    console.log("Logging in:", username, password);
  };

  const B_Links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/About" },
    { label: "Legal", path: "/Legal_Page" },
    { label: "Contact Us", path: "/Contact" },
    { label: "SignUp", path: "/SignUp_Page" },
    { label: "Support", path: "/Support" },
  ];

  return (
    <>
      <Adding_Form onSubmit={handleLogin}>
        <Text_Box
          id="username"
          labelText="User"
          placeholder="Enter Username"
          type="text"
          label="Username"
          onChange={(val) => setUsername(val)}
        />
        <Text_Box
          id="Password_id"
          labelText="Password:"
          placeholderText="Password"
          maxLength={36}
          style={{ isVisible: true, display: "block" }}
          type={showPassword ? "text" : "password"}
          onChange={(val) => setPassword(val)}
        />

        <Check_Box
          id="ShowPassword"
          label="Click here to show your password"
          onChange={() => setShowPassword((prev) => !prev)}
          checked={showPassword}
        />
        <Check_Box id="Remember_Me" label="Select here to Remember Me" />
      </Adding_Form>
      <B_Navbar links={B_Links} />
    </>
  );
};
export default Login_Page;
