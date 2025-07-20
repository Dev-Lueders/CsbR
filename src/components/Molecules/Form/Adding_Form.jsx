import "../../../components/components_styles.css";
import T_Navbar from "../../Atoms/NavBar/T_Navbar";
import B_Navbar from "../../Atoms/NavBar/B_Navbar";
import Button_btn from "../../Atoms/Buttons/Button";
import PropTypes from "prop-types";

const Adding_Form = ({ children, onSubmit }) => {
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
      <T_Navbar links={T_Links} />
      
      <form onSubmit={onSubmit}
        style={{
          // display: "contents",
          gridColumn: "1/-1",
          
        }}
        aria-labelledby="form"
        role="form"
      
      >
        {children}

        <Button_btn
          label="SUBMIT"
          onClickAction="SUBMIT_FORM"
          type="submit"
          style={{
            width: "10rem",
            marginBottom: "60px",
            marginTop: "60px",
            gridColumn: "1/5",
            gridRow: "1/5"
          }}
        />
      </form>
      <B_Navbar links={B_Links} />
    </>
  );
};

Adding_Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};

Adding_Form.defaultProps = {
  onSubmit: (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  },
};

export default Adding_Form;
