//All the text boxes need to be aligned in the two columns
// need to do all the functionality for saving the profile info

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form } from "react-bootstrap";
import T_Navbar from "../../../components/NavBar/T_Navbar";
import B_Navbar from "../../../components/NavBar/B_Navbar";
import Button_btn from "../../../components/Buttons/Button";
import Text_Box from "../../../components/Input_Container/Text_Box";
import Check_Box from "../../../components/Check_Box/Check_Box";
import Scroll_Bar from "../../../components/Scroll_Bar/Scroll_Bar";


import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is loaded

const Profile_Page = () => {
  const T_Links = [
    { label: "Signout", path: "/signout" },
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

  // Separate states for each input field
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
      
      <Container className="mt-4">
        {/* Full-width Scroll Bar */}
        <Row className="justify-content-center">
          <Col md={12}>
            <Scroll_Bar />
          </Col>
        </Row>

        {/* Two-Column Form */}
        <Row className="justify-content-center mt-3">
          <Col md={6} className="d-flex flex-column">
            <Form.Group>
              <Text_Box
                id="F_NAME"
                labelText="First Name"
                placeholderText="First Name Here"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                maxLength={15}
              />
            </Form.Group>

            <Form.Group>
              <Text_Box
                id="L_NAME"
                labelText="Last Name"
                placeholderText="Last Name Here"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                maxLength={15}
              />
            </Form.Group>

            <Form.Group>
              <Text_Box
                id="E_MAIL"
                labelText="E-Mail"
                placeholderText="E-Mail Here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={50}
              />
            </Form.Group>

            <Form.Group>
              <Text_Box
                id="PHONE_NUMBER"
                labelText="Phone Number"
                placeholderText="Phone Number Here"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={15}
              />
            </Form.Group>
          </Col>

          <Col md={6} className="d-flex flex-column">
            <Form.Group>
              <Text_Box
                id="CLIENT_NAME"
                labelText="Your User Name"
                placeholderText="Your User Name Here"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                maxLength={15}
              />
            </Form.Group>

            <Form.Group>
              <Text_Box
                id="Password_id"
                labelText="Password"
                placeholderText="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                maxLength={20}
              />
            </Form.Group>

            <Form.Group>
              <Text_Box
                id="Confirm_Password"
                labelText="Confirm Password"
                placeholderText="Confirm Password Here"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                maxLength={20}
              />
            </Form.Group>

            <Check_Box id="ShowPassword" label="Click here to show your password" />
          </Col>
        </Row>

        {/* Submit Button (Centered) */}
        <Row className="justify-content-center mt-3">
          <Col md={6} className="text-center">
            <Button_btn label="Submit" variant="success" />
          </Col>
        </Row>
      </Container>

      <B_Navbar links={B_Links} />
    </>
  );
};

// PropTypes Validation
Text_Box.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
};

Check_Box.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Button_btn.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Profile_Page;