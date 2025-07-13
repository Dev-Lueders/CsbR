import "../../components_styles.css";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";




const T_Navbar = ({ links = [], children }) => {
  return (
    <Navbar
      className="t_NavBar"
      bg="dark"
      variant="dark"
      style={{
        zIndex: 2, // Ensure it's above other content
        justifyContent: "center", // Center items
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

T_Navbar.defaultProps = {
  style: {},
};
T_Navbar.propTypes = {
  links: PropTypes.array,
  children: PropTypes.node,
  style: PropTypes.object,
};
export default T_Navbar;