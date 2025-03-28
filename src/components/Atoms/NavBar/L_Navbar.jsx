import "../../components_styles.css";
import { Link } from "react-router-dom"; // Fixed import
import { Navbar, Nav } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
const L_Navbar = ({ links = [], children, style = [] }) => {
  return (
    <>
      {/* Left Navbar */}
      <Navbar className="l_NavBar" style={{ zIndex: 1, color: 'white'}}>
          {children}
        <Nav style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>

          {links.map((link, index) => (
          
        <Nav.Link key={index} as={Link} to={link.path} className="Llink" style={{color:'white'}}>
              {link.label}
        </Nav.Link>
          ))}
        </Nav>
      </Navbar>
    </>
  );
};

L_Navbar.defaultProps = {
  style: {},
};
L_Navbar.propTypes = {
  links: PropTypes.array,
  children: PropTypes.node,
  style: PropTypes.object,
};

export default L_Navbar;
