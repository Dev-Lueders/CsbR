import "../../../components/components_styles.css";
import T_Navbar from "../../Atoms/NavBar/T_Navbar";
import B_Navbar from "../../Atoms/NavBar/B_Navbar";
import Button_btn from "../../Atoms/Buttons/Button";
import PropTypes from "prop-types";

const Generic_Form = ({ children, onSubmit, onChange, formData, formType }) => {
  const T_Links = [
    { label: "Home", path: "/" },
    { label: "Sign Up", path: "/SignUp_Page" },
    { label: "Login", path: "/Login_Page" },
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

      <form
        onSubmit={onSubmit}
        style={{
          // display: "contents",
          gridColumn: "15/35",
          gridRow: "8/12",
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
            gridColumn: "10/15",
            gridRow: "10/15",
          }}
        />

        <Button_btn
          label="Reset Password"
          onClickAction="Reset_Password"
          type="button"
          style={{
            width: "10rem",
            marginBottom: "60px",
            marginTop: "60px",
            gridColumn: "1/6",
            gridRow: "15/25",
            isVisible:"false",
          }}
        />
      </form>
      <B_Navbar links={B_Links} />
    </>
  );
};

Generic_Form.propTypes = {
  children: PropTypes.node,
  formType: PropTypes.string,
  formData: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

Generic_Form.defaultProps = {
  onSubmit: (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  },
};

export default Generic_Form;
