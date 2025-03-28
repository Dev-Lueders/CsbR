import React, { useState } from "react";
import T_Navbar from "../../components/Atoms/NavBar/T_Navbar";
import B_Navbar from "../../components/Atoms/NavBar/B_Navbar";
import Button_btn from "../../components/Atoms/Buttons/Button";
import Text_Box from "../../components/Atoms/Input_Container/Text_Box";
import Check_Box from "../../components/Atoms/Check_Box/Check_Box";
import Scroll_Bar from "../../components/Atoms/Scroll_Bar/Scroll_Bar";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is loaded

const Profile_SignUp = () => {
  const T_Links = [
    { label: "Creator Profile", path: "/Creator_Profile_Page" },
    { label: "Home Page", path: "/Landing_Page" },
  ];

  const B_Links = [
    { path: "/contact", label: "Contact Us" },
    { path: "/help", label: "Help" },
    { path: "/about", label: "About" },
    { path: "/support", label: "Support" },
    { path: "/legal", label: "Legal" },
  ];

  // Separate state variables for each input field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <T_Navbar links={T_Links} />

     
            <Text_Box
              id="F_NAME"
              label="First Name"
              placeholder="First Name Here"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Text_Box
              id="L_NAME"
              label="Last Name"
              placeholder="Last Name Here"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Text_Box
              id="E_MAIL"
              label="E-Mail"
              placeholder="E-Mail Here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Text_Box
              id="PHONE_NUMBER"
              label="Phone Number"
              placeholder="Phone Number Here"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
    
            <Text_Box
              id="CLIENT_NAME"
              label="Your User Name"
              placeholder="Your User Name Here"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Text_Box
              id="Password_id"
              label="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Text_Box
              id="Confirm_Password"
              label="Confirm Password"
              placeholder="Confirm Password Here"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Check_Box id="ShowPassword" label="Click here to show your password" />
       

     
            <Button_btn label="Submit" variant="success" />
      

      <B_Navbar links={B_Links} />
    </>
  );
};

export default Profile_SignUp;