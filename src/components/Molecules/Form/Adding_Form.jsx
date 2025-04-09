import React, { useEffect } from 'react';
import "../../../components/components_styles.css";
import T_Navbar from "../../Atoms/NavBar/T_Navbar";
import B_Navbar from "../../Atoms/NavBar/B_Navbar";
import Button_btn from "../../Atoms/Buttons/Button";
import PropTypes from "prop-types";


const Adding_Form = ({ children, onSubmit, passProps }) => {
  console.log("Props received Adding_Form:", passProps)
  const T_Links = [
    { label: "Home", path: "/" },
    { label: "Sign Up", path: "/SignUp_Page" },
    { label: "Login", path: "/Login" },
    { label: "Logout", path: "/" },
  ];

  const B_Links = [
    { label: "About", path: "/About" },
    { label: "Games", path: "/Games" },
    { label: "Help", path: "/Help" },
  ];

 
  return (
    <>
      
        <T_Navbar
          links={T_Links}
          style={{
            gridColumn: "1/1",
            gridRow: "1/ 1",
          }}
        >
          {" "}
        </T_Navbar>
        <form onSubmit={onSubmit} aria-labelledby="form" role="form">
          {children}

          <Button_btn
            id="def_btn"
            label="SUBMIT"
            ariaLabeledBy="form"
            onClickAction="SUBMIT_FORM"
            type="submit"
            isVisible={true}
            gridColumn="18/25"
            gridRow="15/20"
            zIndex="1"
            opacity="1"
            passProps={passProps}
            className="def_btn"
          />
        </form>

        <B_Navbar links={B_Links} />
      
    </>
  );
};

Adding_Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  ariaLabeledBy: PropTypes.string,
  gridPosition: PropTypes.object,
  opacity: PropTypes.number,
  zIndex: PropTypes.number,
  role: PropTypes.string,
  isVisible: PropTypes.bool,
  passProps: PropTypes.object,
  
};


Adding_Form.defaultProps = {
  className: "default-form",
  children: [],
  id: "Adding_Form",
  gridPosition: {gridColumn:"1/37", gridRow:"1/37"}, 
  isVisible: false,
  opacity: 1,
  zIndex: 2,
  style: {},
  role: "form",
  passProps: {},
  ariaLabeledBy: "Adding_Form",
  name: "Adding Form",

  
  onSubmit: (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  },


};

export default Adding_Form;
