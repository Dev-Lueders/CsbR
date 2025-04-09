import "../../components_styles.css";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import Modular_Wrapper from "../../Util/Modular_Wrapper/M_Wrapper.jsx";

const T_Navbar = ({ links = [], children, gridColumn, gridRow, style=[] }) => {
  return (
    
      <Navbar
        className="t_NavBar"
        bg="dark"
        variant="dark"
        style={{
          zIndex: 2, // Ensure it's above other content
          justifyContent: "center", // Center items
          gridColumn,
          gridRow,
          ...style,
        }}
      >
        <Nav
          style={{
            justifyContent: "center",
          }}
        >
          {links.map((link, index) => (
            <Nav.Link key={index} as={Link} to={link.path} className="mx-3">
              {link.label}
            </Nav.Link>
          ))}
        </Nav>
        {children}
      </Navbar>
    
  );
};
T_Navbar.propTypes = {
  links: PropTypes.array,
  children: PropTypes.node,
  gridColumn: PropTypes.string,
  gridRow: PropTypes.string,
  
  style:PropTypes.object,
};
T_Navbar.defaultProps = {
  links: [],
  children: null,
  gridColumn: "4/38",
  gridRow: "1/4",
  style: {}
};


export default T_Navbar;