import T_Navbar from "../../Atoms/NavBar/T_Navbar";
import B_Navbar from "../../Atoms/NavBar/B_Navbar";
import Button_btn from "../../Atoms/Buttons/Button";
import PropTypes from "prop-types";


const Adding_Form = ({ children, onSubmit }) => {
    const T_Links = [
      { label: "Home", href: "/" },
      { label: "Sign Up", href: "/SignUp_Page" },
      { label: "Login", href: "/Login" },
      { label: "Logout", href: "/" },
    ];
  
    const B_Links = [
      { label: "About", href: "/About" },
      { label: "Games", href: "/Games" },
      { label: "Help", href: "/Help" },
    ];
  
    return (
      <>
        <T_Navbar links={T_Links} />
        <form
          onSubmit={onSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          aria-labelledby="form"
          role="form"
        >
          {children}
  
          <Button_btn 
            label="Add This Content" 
            onClickAction="SUBMIT_FORM"
            type="submit" 
            style={{
                width:"10rem",
                marginBottom:"60px",
                marginTop:"60px",
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